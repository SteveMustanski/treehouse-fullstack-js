// Problem:  Need a simple way to display a user's badge count and JavaScript points
// Solution: Use node.js to connect to Tthe Treehouse API to get profile information to print out

// require node module https
const https = require('https');

function getProfile(username) {
  try {
  // function to print message to console
  function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} JavaScript points`;
    console.log(message);
  }
  // connect to the API URL https://teamtreehouse.com/username.json
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = '';

    // read the data
    response.on('data', data => {
      body += data.toString();
    });

    response.on('end', () => {
      // Parse the data
      const profile = JSON.parse(body);
      // Printout the data
      printMessage(username, profile.badges.length, profile.points.JavaScript);
    });

  });

  // handle any errors
  request.on('error', error => {
    console.error(`Problem with request: ${error.message}`);
  });
} catch (error) {
  console.error(`There was an error: ${error.message}`);
}
}
// gets the arguments from the command line as 3 element in the process.argv array
// command would be node app.js followed by list of users
const users = process.argv.slice(2);

users.forEach(username => {
  getProfile(username)
});
