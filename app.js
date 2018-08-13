 const express = require('express');
 const app = express();

 //use to parse body into incoming request //have to install it by "npm install body-parser" command
 const bodyParser = require('body-parser');
 //include customer.js 
 const customerRoutes = require('./api/routes/customer');

 //use to parse body into incoming request
 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());
 app.use('/customer', customerRoutes);
 
 module.exports = app;