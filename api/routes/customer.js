
 const express = require('express');
 const router = express.Router();
 //array declare to store all userDetails
 const userDetailsList=[];
 
    router.get('/',(req, res, next) =>{
	 res.status(200).json({
		 message: 'Handlaing get request to /Customer'
	    });
	});
	
	router.post('/',(req, res, next) =>{
		
	 var userDetails ={
		 userId: req.body.userId,
		 userName: req.body.userName
	 }
	//add individual user userDetailsList array 
	userDetailsList.push(userDetails);
	console.log(userDetails);
	console.log(userDetailsList);
	
	 res.status(201).json({
		 message: 'Handlaing Post request to /userDetails',
		 userDetails: userDetails
	    });
	});
	
	//retrieve the match user ..
	router.get('/:userId', (req, res, next) =>{
		var user = {};
		for( var i = 0; i < userDetailsList.length; i++){
			if(req.params.userId == userDetailsList[i].userId){
			user = userDetailsList[i];
				break;
			}
		}
		
		 res.status(200).json({
		 message: 'userDetails',
		 userDetail: user
	    });
	});
	
	
	
 module.exports = router;