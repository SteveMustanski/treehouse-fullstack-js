// require node module https
const http = require('http');


const apiKey = 'aa28338ba3c9e427';
const feature = 'conditions';

function get(query){
// get the data for a zipcode
   const request = http.get(`http://api.wunderground.com/api/${apiKey}/${feature}/q/${query}.json`, response => {
    let body = '';

    response.on('data', data => {
      body += data.toString();
    });

    // log out the response 
    response.on('end', () =>{
      const forecast = JSON.parse(body);
      const location = (forecast.current_observation.display_location.full);
      const temp_f = (forecast.current_observation.temp_f);
      console.log(`The current temperature for ${location} is ${temp_f} degrees.`);
    });

  
   });
  }

module.exports.get = get;

