 // importing http package
 const http = require('http');
 
 //included app.js file in this server
 const app = require('./app');
 const server = http.createServer(app).listen(3000);
 
 console.log('Server is Running having port  ' +server.address().port);