const mongoose = require('mongoose')

const { Schema } = mongoose


// userid -- product id -- quantity -- totalPrice
const cartSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users',
    },
    productid: {
        type: mongoose.Schema.Types.ObjectId, ref: 'products'
    },
    quantity: {
        type: Number, required: true
    },
    totalPrice: {
        type: Number, required: true
    }
})

module.exports = mongoose.model('carts' , cartSchema)