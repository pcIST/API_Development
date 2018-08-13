
 const express = require('express');
 const router = express.Router();
 
    router.get('/',(req, res, next) =>{
	 res.status(200).json({
		 message: 'Handlaing get request to /Customer'
	    });
	});
	
	router.post('/',(req, res, next) =>{
	 
	 const userDetails ={
		 userId: req.body.userId,
		 userName: req.body.userName
	 }
	 console.log(userDetails.size);
	
	 res.status(201).json({
		 message: 'Handlaing Post request to /userDetails',
		 orderDetails: userDetails
	    });
	});
	
	
 module.exports = router;