// Handle HTTP route GET / and POST /
function home(request, response) {
  if (request.url === '/') {
    response.setHeader('Content-Type', 'text/plain');
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n')
  }
  //  if the url == / && GET - show search
  //  if the url == / && POST - redirect to /:username
}

// Handle HTTP route GET /:username
function user (request, response) {
  let username = request.url.replace('/', '');
  if (username.length > 0 )  {
    response.setHeader('Content-Type', 'text/plain');
    response.write('Header\n');
    response.write(username + '\n');
    response.end('Footer\n');

//  if the url == / anything, get JSON from treehouse
//  on end, show profile
//  on error, show error
  }
}

module.exports.home = home;
module.exports.user = user;