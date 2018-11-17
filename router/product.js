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

product_router.get('/teilla', (req, res) => {
    const item = productModel.find({name : "teilla"},(err, result)=>{
        if(err || result.length == 0){
            res.send(404, {"message" : "pai nai", "error": err})
            // throw err;
        }
        else if(result){
            res.end("result paisi");
        }
    });
})

product_router.get('/saban', (req, res) => {
    const price_value = req.query.price
    // console.log(req.query.price)

    final_res = {}
    const item = productModel.findOne({name : "saban", mullo: price_value},(err, result)=>{
        if (err) {
            throw err;
        }
        else if (result) {
            final_res = result
        }

        if (final_res) {
            return res.send(200, {
                "result" : {
                    "name": final_res.name,
                    "price": final_res.price,
                    "brand": final_res.brand,
                    "color": final_res.color,
                    "smell": final_res.smell,
                }
            });
        } else {
            return res.send(404, {"message": "nai, sorry for waiting"})
        }
    });
})

product_router.get('/lobon', (req, res) => {
    const item = productModel.find({name : "lobon"}, (err, result) => {
        if (err) {
            throw err;
        }
        else if (result) {
            res.json(result);
        }
    });
})

product_router.post('/create', (req, res) => {
    let item = new productModel({
        "name": req.body.name,
        "price": req.body.price,
        "brand": req.body.brand,
        "quantity": req.body.quantity,
        "size": req.body.size,
        "unit": req.body.unit,
        "color": req.body.color,
        "expired_date": req.body.expired_date,
        "license": req.body.license,
        "smell": req.body.smell
    });
    
    // error object definition
    let client_err = {}
    item.save( (err) => {
        if (err) client_err = err
    })
    
    if (client_err) {
        return res.send(422, {
            "message": "tumi kichu ekta vul korso vai/bon",
            "error": client_err
        })
    }
    return res.send(201, {"message": "item jog hoyeche, apnake dhonnobad!"})
})

module.exports = product_router