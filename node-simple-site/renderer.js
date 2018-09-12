const fs = require('fs');

function mergeValues(values, content) {
  // cycle over keys
  for (var key in values) {
    // replace keys with values
    content = content.replace('{{' + key + '}}', values[key]);
  }

  // return merged content
  return content;

}

function view(templateName, values, response) {
  //read from the template files
  let fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: 'utf8'});
  // insert value into content
  fileContents = mergeValues(values, fileContents);
  // write out to the response
  response.write(fileContents);
}

module.exports.view = view;