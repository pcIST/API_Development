const mongoose = require('mongoose')
const prodSchema = new mongoose.Schema({
    "name": {type: String, required: true},
    "price": {type: Number, min:1, max: 1000},
    "brand": String,
    "quantity": Number,
    "size": Number,
    "unit": String,
    "color": String,
    "created_at": {type: Date, default: new Date()},
    "expired_date": Date,
    "license": String,
    "smell": String,
})

const prodModel = mongoose.model('Product', prodSchema)
