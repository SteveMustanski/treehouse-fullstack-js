// Problem: We need a simple way to get a users profile information and post to web page
// Solution: use node.js to look up profile information and serve template files via HTTP

const router = require('./router.js');
// Create a web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  router.home(request, response);
  router.user(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//  Function that handles reading of template files and merge with information
//  read from file and get string
//  merge values into string