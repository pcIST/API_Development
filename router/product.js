const express = require('express')
const productModel = require('./../model/product')
const product_router = express.Router()

product_router.get('/', (req, res) => {
    const item = productModel.find({},(err, result)=>{
        if(err){
            throw err;
        }
        else if(result){
            res.json(result);
        }
       });
})

product_router.get('/tel', (req, res) => {
    const item = productModel.find({name : "tel"},(err, result)=>{
        if(err){
            throw err;
        }
        else if(result){
            res.json(result);
        }
       });
})

product_router.get('/saban', (req, res) => {
   const item = productModel.find({name : "saban"},(err, result)=>{
    if(err){
        throw err;
    }
    else if(result){
        res.json(result);
    }
   });
})

product_router.get('/lobon', (req, res) => {
    const item = productModel.find({name : "lobon"},(err, result)=>{
        if(err){
            throw err;
        }
        else if(result){
            res.json(result);
        }
       });
})

product_router.post('/create', (req, res) => {

    const item = new productModel({
        name : req.body.name,
        price : req.body.price,
        brand : req.body.brand,
        quantity : req.body.quantity,
        size : req.body.size,
        unit : req.body.unit,
        color : req.body.color,
        created_at : req.body.created_at,
        expired_date :req.body.expired_date,
        license : req.body.license,
        smell : req.body.smell,
    });
    item.save((err)=>{
        if(!err){
            console.log("Item Saved Successfully :) ");
        }
        else{
            console.error(err);
        }
    });

    //res.send()
    
    //console.log("the size is: ")
    //console.log(req.body.size)

    //console.log("the type of size is:", typeof req.body.size)
    res.end()
})

module.exports = product_router