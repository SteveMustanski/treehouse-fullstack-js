// Problem:  Need a simple way to display a user's badge count and JavaScript points
// Solution: Use node.js to connect to Tthe Treehouse API to get profile information to print out

// require node module https
const https = require('https');
// require https for status codes
const http = require('http');


// function to print error messages
function printError(error) {
  console.error(error.message);
}

function get(username) {
  try {
    // function to print message to console
    function printMessage(username, badgeCount, points) {
      const message = `${username} has ${badgeCount} total badge(s) and ${points} JavaScript points`;
      console.log(message);
    }
    // connect to the API URL https://teamtreehouse.com/username.json
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      if (response.statusCode === 200) {
        let body = '';

        // read the data
        response.on('data', data => {
          body += data.toString();
        });

        response.on('end', () => {
          try {
            // Parse the data
            const profile = JSON.parse(body);
            // Printout the data
            printMessage(username, profile.badges.length, profile.points.JavaScript);

          } catch (error) {
            printError(error);
          }
        });
      } else {
        const message = `There was an error getting profile data for ${username}. (${http.STATUS_CODES[response.statusCode]})`;
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }

    });

    // handle any errors
    request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}

module.exports.get = get;