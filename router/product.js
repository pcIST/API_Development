const express = require('express')
const prodModel = require('../model/product')
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
    let item = new prodModel({
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