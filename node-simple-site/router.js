const Profile = require('./profile.js');
const renderer = require('./renderer');
const queryString = require('querystring');



// Handle HTTP route GET / and POST /
function home(request, response) {
  //  if the url == / && GET - show search
  if (request.url === '/') {
    if (request.method.toLowerCase() === "get") {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      renderer.view('header', {}, response);
      renderer.view('Search', {}, response);
      renderer.view('Footer', {}, response);
      response.end();
    } else {
      //  if the url == / && POST - redirect to /:username
      // get the post data from body
      request.on('data', (postBody) => {
        // extract the username
        let query = queryString.parse(postBody.toString());
        // then redirect to /:username
        response.writeHead(303, {"Location": "/" + query.username});
        response.end();
      })
    }
  }


}

// Handle HTTP route GET /:username
function user(request, response) {
  let username = request.url.replace('/', '');
  if (username.length > 0) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    renderer.view('header', {}, response);
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
      renderer.view('profile', values, response);
      renderer.view('Footer', {}, response);
      response.end();
    });
    //  on error, show error
    studentProfile.on('error', (error) => {
      renderer.view('error', { errorMessage: error.message }, response);
      renderer.view('Search', {}, response);
      renderer.view('Footer', {}, response);
      response.end();
    });





  }
}

module.exports.home = home;
module.exports.user = user;