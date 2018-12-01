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

// get product
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

// create product
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
    item.save( (err) => {
        if (err) {
            console.log(client_err)
            return res.send(422, {
                "message": "tumi kichu ekta vul korso vai/bon",
                "error": client_err
            })
        }
        return res.send(201, {"message": "item jog hoyeche, apnake dhonnobad!"})
    })
})

// update product
product_router.patch('/:product_id', (req, res) => {
    const reqBody = req.body
    
    productModel.updateOne({_id: req.params.product_id}, reqBody, (err, result) => {
        if (err) {
            return res.send(400, {message: "something went wrong!"})
        }

        if (result) {
            return res.send(200, {message: "successfully updated", data: result})
        }
    })
})

// delete product
product_router.delete('/:product_id', (req, res) => {
    productModel.deleteOne({_id: req.params.product_id}, (err, result) => {
        if (err) {
            return res.send(400, {message: "something went wrong!"})
        }

        if (result) {
            return res.send(204)
        }
    })
})

module.exports = product_router