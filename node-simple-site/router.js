const Profile = require('./profile.js');


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
function user(request, response) {
  let username = request.url.replace('/', '');
  if (username.length > 0) {
    response.setHeader('Content-Type', 'text/plain');
    response.write('Header\n');
    // get JSON from treehouse
    let studentProfile = new Profile(username);
    //  on end, show profile
    studentProfile.on('end', (profileJSON) => {
      let values = {
        avatarURL: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      response.write(`${values.username} has ${values.badges} badges\n`);
      response.end('Footer\n');
    });
    //  on error, show error
    studentProfile.on('error', (error) => {
      response.end('Footer\n');
    });





  }
}

module.exports.home = home;
module.exports.user = user;