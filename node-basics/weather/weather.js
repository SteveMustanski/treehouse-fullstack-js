// require node module https
const http = require('http');

const apiKey = 'aa28338ba3c9e427';
const zipcode = '23050';
const feature = 'conditions';

// get the data for a zipcode
   const request = http.get(`http://api.wunderground.com/api/${apiKey}/${feature}/q/${zipcode}.json`, response => {
    let body = '';

    response.on('data', data => {
      body += data.toString();
    });

    response.on('end', () =>{
      const forecast = JSON.parse(body);
      console.log(forecast);
    });

  
   });



// log out the response 