// importing http package
const http = require('http');

// creating a basic server
const server = http.createServer( function (req, res) {
    console.log("the req URL is: ");
    console.log(req.url);

    // basic routing
    if (req.url == "/") {
        res.end("this is the homepage")
    } else if (req.url == "/item") {
        res.statusCode = 200;
        res.end("you are in the item page")
    }else if (req.url == "/profile"){
        res.statusCode == 200;
        res.end("You are in profile page");
    }else if (req.url == "/store"){
        res.statusCode == 200;
        res.end("You are in Store page");
    } else {
        res.statusCode = 404;
        res.end("this is NOT the homepage")
    }


    
}).listen(3000, 'localhost', function() {
    console.log("the port is: ");
    console.log(server.address().port);
});
