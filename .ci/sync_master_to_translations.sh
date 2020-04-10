#!/bin/bash
#
# Sync Master -> Translations
# Prepare and convert Hugo content and strings file formats for translation service integration

working_dir="$(pwd)"
source_lang="en"

# Handle arguments
if [ -z "$1" ]; then
	echo "Requires an argument specifying the master branch folder"
	exit 1
fi
master_branch_dir="$1"
if [ ! -d "${master_branch_dir}" ]; then
  echo "Directory ${master_branch_dir} does *not* exist."
  exit 1
fi
if [ -z "$2" ]; then
	echo "Requires an argument specifying the translations branch folder"
	exit 1
fi
translations_branch_dir="$2"
if [ ! -d "${translations_branch_dir}" ]; then
  echo "Directory ${translations_branch_dir} does *not* exist."
  exit 1
fi

cd "${working_dir}"

###################
# Check if there are any translation strings that aren't just strings
# (we currently do not support plural forms as the target translation service format - Chrome JSON - does not support plural forms)
goi18n_json="${master_branch_dir}/themes/wz2100net/i18n/${source_lang}.json"
check_json_result=$(cat "${goi18n_json}" | jq '.[] | select(.translation|type=="string"|not)')
# (output should be empty)
if [ ! -z "${check_json_result}" ]; then
  echo "One or more 'translation' values are *not* strings in the source file: ${goi18n_json}"
  echo "${check_json_result}"
  exit 1
fi

###################
# Convert the go-i18n json format to Chrome JSON format (supported by Crowdin)
# see: https://support.crowdin.com/file-formats/chrome-json/
output_chrome_json="${translations_branch_dir}/themes/wz2100net/i18n/${source_lang}.json"
destination_path=$(dirname "${output_chrome_json}")
mkdir -p "${destination_path}"
echo "Converting to Chrome JSON strings format: ${goi18n_json}"
cat "${goi18n_json}" | jq 'reduce (.[] | select(.translation|type=="string")) as $i ({}; .[$i.id] = {message: $i.translation})' > "${output_chrome_json}"

###################
# Clear existing source language processed content files
if [ -d "${translations_branch_dir}/content/${source_lang}" ]; then
  cd "${translations_branch_dir}/content/${source_lang}"
  echo "Cleaning-up: ${translations_branch_dir}/content/${source_lang}"
  shopt -u dotglob
  find . -mindepth 1 -delete
  cd -
else
  echo "Directory: ${translations_branch_dir}/content/${source_lang} does not exist - skipping cleanup."
fi

###################
# Sync source language content files, processed & filtered, with translation branch
# remove front-matter lines from markdown that should not be translated
split_script="${master_branch_dir}/.ci/split_front_matter_from_markdown.py"
if [ ! -f "${split_script}" ]; then
  echo "Missing expected script: ${split_script}"
  exit 1
fi

cd "${master_branch_dir}/content/${source_lang}"
tmp_split_content_path="${working_dir}/tmp_split_content/${source_lang}"
mkdir -p "${tmp_split_content_path}"
find . -name '*.md' | while IFS= read -r file; do
  echo "- Processing: ${source_lang}/${file}"

  python3 "${split_script}" "${file}" "${tmp_split_content_path}"
  filename="$(basename "${file}")"

  ###################
  # Process front-matter

  # Remove any lines between:
  # "# begin: no-translate" and "# end: no-translate"
  # and
  # Remove any lines that contain: "# no-translate"

  cat "${tmp_split_content_path}/${filename}.frontmatter" | sed '/^# begin: no-translate$/,/^# end: no-translate$/d' | grep -v "# no-translate" > "${tmp_split_content_path}/${filename}.frontmatter.filtered"

  ###################
  # Recombine filtered front-matter with content
  output_file="${translations_branch_dir}/content/${source_lang}/${file}"
  destination_path=$(dirname "${output_file}")
  mkdir -p "${destination_path}"
  echo "---" > "${output_file}"
  cat "${tmp_split_content_path}/${filename}.frontmatter.filtered" >> "${output_file}"
  echo "---" >> "${output_file}"
  cat "${tmp_split_content_path}/${filename}.markdown" >> "${output_file}"

  # Delete the temporary split files
  rm "${tmp_split_content_path}/${filename}.frontmatter"
  rm "${tmp_split_content_path}/${filename}.frontmatter.filtered"
  rm "${tmp_split_content_path}/${filename}.markdown"
done
cd -

###################
# Cleanup
rm -rf "${working_dir}/tmp_split_content"

echo "Done."
