#!/bin/bash
#
# Sync Translations -> Master
# Convert and merge translation service integration formats into master branch (Hugo / go-i18n) formats
# With removed front-matter, etc returned

working_dir="$(pwd)"
source_lang="en"

# Check yq version
yq_version="$(yq --version | perl -pe 'if(($v)=/([0-9]+([.][0-9]+)+)/){print"$v\n";exit}$_=""')"
yq_major_version="$(echo "${yq_version}" | cut -d. -f1)"
if [ "${yq_major_version}" -lt "4" ]; then
  echo "Script requires yq 4+ (detected version: ${yq_version})"
  exit 1
fi

# Handle arguments
if [ -z "$1" ]; then
	echo "Requires an argument specifying the translations branch folder"
	exit 1
fi
translations_branch_dir="$1"
if [ ! -d "${translations_branch_dir}" ]; then
  echo "Directory ${translations_branch_dir} does *not* exist."
  exit 1
fi
if [ -z "$2" ]; then
	echo "Requires an argument specifying the master branch folder"
	exit 1
fi
master_branch_dir="$2"
if [ ! -d "${master_branch_dir}" ]; then
  echo "Directory ${master_branch_dir} does *not* exist."
  exit 1
fi

cd "${working_dir}"

split_script="${master_branch_dir}/.ci/split_front_matter_from_markdown.py"
if [ ! -f "${split_script}" ]; then
  echo "Missing expected script: ${split_script}"
  exit 1
fi

###################
# Create list of content markdown files
if [ ! -d "${master_branch_dir}/content/${source_lang}" ]; then
  echo "Directory ${master_branch_dir}/content/${source_lang} does *not* exist."
  exit 1
fi
cd "${master_branch_dir}/content/${source_lang}"
find . -name '*.md' > "${working_dir}/mdcontent.dat"
# Extract base content front-matter
mkdir -p "${working_dir}/baselang_split"
while read file
do
  if [ -f "${file}" ]; then
    echo "- Extracting base front-matter: ${file}"
    output_file="${working_dir}/baselang_split/${file}.frontmatter"
    destination_path=$(dirname "${output_file}")
    mkdir -p "${destination_path}"
    # Split original file into front matter and content
    python3 "${split_script}" "${file}" "${destination_path}"
  fi
done < "${working_dir}/mdcontent.dat"
cd "${working_dir}"

###################
# Clear previously-converted translated content files
if [ ! -d "${master_branch_dir}/content" ]; then
  echo "Directory ${master_branch_dir}/content/ does *not* exist."
  exit 1
fi
cd "${master_branch_dir}/content"
shopt -u dotglob
find * -prune -type d | while IFS= read -r d; do
  # ignoring the source language ("en")
  if [ ! "${d}" == "${source_lang}" ]; then
    echo "- Clear previously-converted translated content files: ${d}"
    cd "${d}"
    find . -mindepth 1 -delete
    cd ..
  fi
done
cd "${working_dir}"

###################
# Convert translated markdown files

# in each language content directory
base_content_dir="${translations_branch_dir}/content"
cd "${base_content_dir}"
shopt -u dotglob
find * -prune -type d | while IFS= read -r d; do
  # ignoring the source language ("en")
  if [ ! "${d}" == "${source_lang}" ]; then
    cd "${base_content_dir}/${d}"
    if [ $? -ne 0 ]; then
      echo "Failed to change directory!"
      exit 1
    fi
    master_branch_lang_folder="${master_branch_dir}/content/${d}"
    mkdir -p "${master_branch_lang_folder}"
    # loop through source markdown content file names
    while read file
    do
      if [ -f "${file}" ]; then
        printf "%s" "- Processing: ${d}/${file}: "

        # Split translated file into front matter and content
        python3 "${split_script}" "${file}"

        if [ -s "${file}.frontmatter" ]; then
          # Use yq to merge translated front-matter back into full base file front-matter
          printf "\t%s\n" "+ Merging front-matter"
          yq eval-all 'select(fileIndex == 0) *? select(fileIndex == 1)' "${working_dir}/baselang_split/${file}.frontmatter" "${file}.frontmatter" > "${file}.frontmatter.merged"
        else
          # Just use base front matter
          printf "\t%s\n" "+ Using base front-matter"
          cp "${working_dir}/baselang_split/${file}.frontmatter" "${file}.frontmatter.merged"
        fi

        # Diff the frontmatter
        dyff between --omit-header --set-exit-code --ignore-order-changes --output=brief "${working_dir}/baselang_split/${file}.frontmatter" "${file}.frontmatter.merged"
        FRONTMATTER_DIFF_RESULT=$?

        # Diff the markdown content
        diff --ignore-blank-lines --ignore-space-change -q "${file}.markdown" "${working_dir}/baselang_split/${file}.markdown" >/dev/null
        MARKDOWN_DIFF_RESULT=$?

        # Concatenate the merged front-matter with the translated content
        echo "---" > "${file}.merged"
        cat "${file}.frontmatter.merged" >> "${file}.merged"
        echo "---" >> "${file}.merged"
        cat "${file}.markdown" >> "${file}.merged"

        # Delete the temporary split files
        rm "${file}.frontmatter"
        rm "${file}.frontmatter.merged"
        rm "${file}.markdown"

        # Move the merged translated file to the master branch - if it's different from the base file
        destination_file="${master_branch_lang_folder}/${file}"
        destination_path=$(dirname "${destination_file}")
        if [ $FRONTMATTER_DIFF_RESULT -ne 0 ] || [ $MARKDOWN_DIFF_RESULT -ne 0 ]; then
          mkdir -p "${destination_path}"
          printf "\t%s\n" "+ [Saved] translated file"
          mv "${file}.merged" "${destination_file}"
        else
          # This content file is the same as the base file - i.e. untranslated
          copy_unchanged_file=false
          filename="$(basename "${file}")"
          # If the filename is "_index.md", always copy it (to ensure site sections are created)
          if case "${filename}" in _index.*) true;; *) false;; esac; then
            copy_unchanged_file=true
          fi
          # If the filename is "index.md", always copy it (to ensure that headless bundles are created)
          if case "${filename}" in index.*) true;; *) false;; esac; then
            copy_unchanged_file=true
          fi
          if [ "$copy_unchanged_file" = true ]; then
            mkdir -p "${destination_path}"
            printf "\t%s\n" "+ [Saved] untranslated index file [override]"
            mv "${file}.merged" "${destination_file}"
          else
            # Otherwise, do *not* copy it to the destination language folder
            printf "\t%s\n" "- Ignoring untranslated file"
            rm "${file}.merged"
          fi
        fi
      fi
    done < "${working_dir}/mdcontent.dat"
    cd - > /dev/null
  fi
done
cd "${working_dir}"

###################
# Cleanup base front-matter / tmp files
rm -rf "${working_dir}/baselang_split"
rm "${working_dir}/mdcontent.dat"

###################
# Convert the Chrome JSON format (from Crowdin) strings files to go-i18n json format
cd "${translations_branch_dir}/themes/wz2100net/i18n"
find . -name '*.json' | while IFS= read -r file; do
  if case "${file}" in *${source_lang}.json) true;; *) false;; esac; then
    echo "- Skipping source file: ${file}"
  else
    echo "Converting to go-i18n JSON strings format: ${file}"
    output_goi18n_json="${master_branch_dir}/themes/wz2100net/i18n/${file}"
    cat "${file}" | jq '[to_entries | .[] | {id: (.key), translation: (.value.message)}]' > "${output_goi18n_json}"
  fi
done

echo "Done."
