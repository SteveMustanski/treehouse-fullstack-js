// Problem: We need a simple way to get a users profile information and post to web page
// Solution: use node.js to look up profile information and serve template files via HTTP

// 1. Create a web server

// 2. Handle HTTP route GET / and POST /
//  if the url == / && GET - show search
//  if the url == / && POST - redirect to /:username

// 3. Handle HTTP route GET /:username
//  if the url == / anything, get JSON from treehouse
//  on end, show profile
//  on error, show error


// 4. Function that handles reading of template files and merge with information
//  read from file and get string
//  merge values into string