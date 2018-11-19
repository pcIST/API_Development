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

product_router.get('/:name', (req, res) => {
    let query = {
        name: req.params.name,
    }
    let q = req.query
    if (q.price) {
        query.price = q.price
    }
    if (q.brand) {
        query.brand = q.brand
    }
    if (q.quantity) {
        query.quantity = q.quantity
    }
    if (q.size) {
        query.size = q.size
    }
    if (q.unit) {
        query.unit = q.unit
    }
    if (q.color) {
        query.color = q.color
    }
    productModel.findOne(query, (err, result) => {
        if (err) {
            throw err;
        }
        else if (result) {
            res.json({
                "name": result.name,
                "price": result.price,
                "brand": result.brand,
                "quantity": result.quantity,
                "size": result.size,
                "unit": result.unit,
                "color": result.color,
            })
        }
        else {
            res.status(404).json({"message": "Sorry, product not found."})
        }
    })
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