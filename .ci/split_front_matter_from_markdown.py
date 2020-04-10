import sys
import shutil
import os

YAML_FRONTMATTER_DELIMETER = "---"
TOML_FRONTMATTER_DELIMETER = "+++"

input_markdown = sys.argv[1]
base_filename = os.path.basename(input_markdown)
output_directory = os.path.dirname(input_markdown)
if len(sys.argv) >= 3:
    output_directory = sys.argv[2]

output_filename_base = os.path.join(output_directory, base_filename)

with open(input_markdown) as f:
    firstline = f.readline()
    if (firstline.startswith(YAML_FRONTMATTER_DELIMETER)):
        # YAML front-matter
        print ("YAML front matter detected - splitting")
        reading_frontmatter = True
        with open(output_filename_base + '.frontmatter', 'w') as frontmatter, open(output_filename_base + '.markdown', 'w') as markdown:
            for line in f.readlines():
                if reading_frontmatter:
                    if not line.startswith(YAML_FRONTMATTER_DELIMETER):
                        frontmatter.write(line)
                    else:
                        reading_frontmatter = False
                else:
                    markdown.write(line)
    elif (firstline.startswith(TOML_FRONTMATTER_DELIMETER)):
        # Currently unsupported
        raise "TOML front matter is currently unsupported - please use YAML"
    elif (firstline.startswith("{")):
        # Currently unsupported
        raise "JSON front matter is currently unsupported - please use YAML"
    elif (firstline.startswith("#+")):
        # Currently unsupported
        raise "Org mode front matter is currently unsupported - please use YAML"
    else:
        # Seems to have no front matter
        print ("No front matter detected")
        open(input_markdown + '.frontmatter', 'w').close()
        shutil.copyfile(input_markdown, input_markdown + '.markdown')

