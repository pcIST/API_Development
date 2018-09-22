// // importing http package
// const http = require('http');

// // creating a basic server
// const server = http.createServer( function (req, res) {
//     console.log("the req URL is: ");
//     console.log(req.url);

//     // basic routing
//     if (req.url == "/") {
//         res.end("this is the homepage")
//     } else if (req.url == "/item") {
//         res.statusCode = 200;
//         res.end("you are in the item page")
//     } else if (req.url == "/profile"){
//         res.statusCode == 200;
//         res.end("You are in profile page");
//     } else if (req.url == "/demo"){
//         res.statusCode == 200;
//         res.end("This is the demo page");
//     } else {
//         res.statusCode = 404;
//         res.end("you lost, bro or sis?")
//     }
// }).listen(3000, 'localhost', function() {
//     console.log("the port is: ");
//     console.log(server.address().port);
// });


const express = require('express')
const app = express()
const port = 3001

const myfunc = (req, res) =>
    res.send('this is the homepage')

app.get('/', myfunc)

// sir root
app.get('/sir',(req,res)=>res.send('You are in sir page'));

// shaon's page
const shaonFunc = (req, res) =>
	res.send('This page belongs to Shaon')

app.get('/shaon', shaonFunc)

app.listen(port, () =>
    console.log(`Our app listening on port ${port}!`)
)
