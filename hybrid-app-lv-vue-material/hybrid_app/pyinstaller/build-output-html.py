import os
str_html = ''
str_bundle_lib = ''
str_bundle_main = ''
str_main = ''
str_output = ''

with open(os.path.abspath('../../index.html')) as f:
    str_html = f.read()
str_output = str_html

with open(
        os.path.abspath('../../webpack-lib/bundle_lib.js'),
        encoding='utf-8') as f:
    str_bundle_lib = f.read()
# with open(os.path.abspath('../../bundle_main.js'), encoding='utf-8') as f:
#     str_bundle_main = f.read()
with open(os.path.abspath('../../main.js'), encoding='utf-8') as f:
    str_main = f.read()

str_output = str_output.replace('[bundle_lib]', str_bundle_lib)
# str_output = str_output.replace('[bundle_main]', str_bundle_main)
str_output = str_output.replace('[main]', str_main)

f_output = open("./output.html", "w")
f_output.write(str_output)
f_output.close()