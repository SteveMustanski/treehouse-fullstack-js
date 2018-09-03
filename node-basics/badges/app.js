// gets the arguments from the command line as 3 element in the process.argv array
// command would be node app.js followed by list of users
const profile = require('./profile.js');

const users = process.argv.slice(2);
users.forEach(profile.get);

