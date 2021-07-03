const mongoose = require('mongoose')

// destructering Schema func from mongoose 
const { Schema } = mongoose


// blueprint of products
const product = new Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'categories'
    },
    productName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    }
},
    { collection: 'products' })


// exports the collection 
module.exports = mongoose.model('products', product)