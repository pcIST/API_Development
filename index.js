const http = require('http');
const server = http.createServer( function (req, res) {
    console.log("server running");
    // console.log(res);
    // res.statusCode = 200;
    res.end("server created");
    // let name = "IST";
    // res.json({"name": "pcIST shop", "time": new Date()});
})

server.listen(3000, "localhost", function() {
    const options = {
        port: 3000,
        host: "localhost",
        path: "/",
        method: "GET"
    };

    const req = http.request(options);
    req.end();

    req.on("end", function (res, socket, upgradeHead) {
        console.log("user hit the root URL");
        res.end("user hit the root URL");
        socket.end();
    })

})

let shop_option = {
    port: 3000,
    host: "localhost",
    path: "/shop",
    method: "GET"
};

http.get(shop_option, (res) => {
    res.on("end", function (res, socket, upgradeHead) {
        console.log("user hit the shop URL");
        res.end("user hit the shop URL");
        socket.end();
    })
})