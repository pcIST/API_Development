// importing http package
const http = require('http');
const express = require('express');
const app = express();

 
  app.get('/name/:name', (req, res) => {
	  console.log(req.url);
	  res.end('HI !' + req.params.name);
	});
	
  app.get('/item', (req, res) =>{
	  console.log(req.url);
	  res.end('you are in the item page !');
	});
	
  app.get('/', (req, res) =>{
	  console.log(req.url);
	  res.end('This is Home Page');
	});
 /* error Handling if bad Request */
  app.use((req, res, next) =>{
     const error = new Error('Not found');
     error.status = 404;
     next(error);
 });
  app.use((error, req, res, next) => {
	 res.json({
		error:{
			errorMessage: error.message,
			notice: 'plz try to access with the valid request'
		} 
	 });
 });
 const server = http.createServer(app).listen(3000);
 console.log('Server is Running having port  ' +server.address().port);

/* 	http.createServer(app).listen(3000); */
	/* 
// creating a basic server
const server = http.createServer( function (req, res) {
    console.log("the req URL is: ")
    console.log(req.url)
	
    // basic routing
    if (req.url == "/") {
        res.end("this is the homepage")
    } else if (req.url == "/item") {
        res.statusCode = 200
        res.end("you are in the item page")
    } else {
        res.statusCode = 404
        res.end("this is NOT the homepage")
    }
}).listen(3000, 'localhost', function() {
    console.log("the port is: ")
    console.log(server.address().port)
}) */
