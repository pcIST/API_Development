const express = require('express')
const productModel = require('./../model/product')
const product_router = express.Router()

product_router.get('/', (req, res) => {
    res.send('amader product list ekhane dekha jabe')
})

product_router.get('/tel', (req, res) => {
    res.send('tel er dam ajke 100 taka')
})

product_router.get('/saban', (req, res) => {
    res.send("saban 1 pc 25 taka")
})

product_router.get('/lobon', (req, res) => {
    res.send('ayodin mukto lobon 10 taka')
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
        if(err){
            return handleError(err);
        }
        console.log("Item Saved Successfully :) ");
    });
    
    //console.log("the size is: ")
    //console.log(req.body.size)

    //console.log("the type of size is:", typeof req.body.size)
    res.end()
})

module.exports = product_router