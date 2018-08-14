
 const express = require('express');
 const router = express.Router();
 //array declare to store all userDetails
 const userDetailsList=[];
 	
	router.post('/registration',(req, res, next) =>{
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
		
	//get all register user
	router.get('/getUsersList', (req, res, next) => {
		res.status(201).json({
			usersList: userDetailsList
		});
	});
	
	//retrieve the match user ..
	router.get('/getUser/:userId', (req, res, next) =>{
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
	
	//delete the match user from userDetailsList
	router.delete('/deleteUser/:userId', (req, res, next)=>{
		for( var i = 0; i < userDetailsList.length; i++){
			if(req.params.userId == userDetailsList[i].userId){
			    userDetailsList.splice(i,1);
			    break;
			}
		}
		res.status(201).json({
			message: 'following id is deleted',
			id: req.params.userId
		});
		
	});
	
	
 module.exports = router;