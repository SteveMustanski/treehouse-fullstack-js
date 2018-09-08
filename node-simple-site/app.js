// Problem: We need a simple way to get a users profile information and post to web page
// Solution: use node.js to look up profile information and serve template files via HTTP

// 1. Create a web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  homeRoute(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// 2. Handle HTTP route GET / and POST /
function homeRoute(request, response) {
  if (request.url === '/') {
    response.setHeader('Content-Type', 'text/plain');
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n')
  }
  //  if the url == / && GET - show search
  //  if the url == / && POST - redirect to /:username


}

// 3. Handle HTTP route GET /:username
//  if the url == / anything, get JSON from treehouse
//  on end, show profile
//  on error, show error


// 4. Function that handles reading of template files and merge with information
//  read from file and get string
//  merge values into string