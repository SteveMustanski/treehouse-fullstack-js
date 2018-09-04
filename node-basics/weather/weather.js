// require node module https
const http = require('http');


const apiKey = 'aa28338ba3c9e427';
const feature = 'conditions';

function printError(error) {
  console.error(error.message);
}

function get(query) {
  try {
    // get the data for a zipcode
    const request = http.get(`http://api.wunderground.com/api/${apiKey}/${feature}/q/${query}.json`, response => {
      if (response.statusCode === 200) {
        let body = '';

        response.on('data', data => {
          body += data.toString();
        });

        // log out the response 
        response.on('end', () => {
          const forecast = JSON.parse(body);
          const location = (forecast.current_observation.display_location.full);
          const temp_f = (forecast.current_observation.temp_f);
          console.log(`The current temperature for ${location} is ${temp_f} degrees.`);
        });

      } else {
        const message = `There was an error getting weather data for ${query}. (${http.STATUS_CODES[response.statusCode]})`;
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }

    });

    request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}

module.exports.get = get;

