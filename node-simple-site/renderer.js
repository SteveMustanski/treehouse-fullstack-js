const fs = require('fs');


function view(templateName, values, response) {
  //read from the template files
  let fileContents = fs.readFileSync(`./views/${templateName}.html`)
  // insert value into content

  // write out to the response
  response.write(fileContents);
}

module.exports.view = view;