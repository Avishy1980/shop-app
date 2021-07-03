const products = require('express').Router()

// import product schema
const product = require('../models/products')


// req body example:
// {
//     "productName": "wifi dongle",
//     "description":"300 Mbps",
//     "price": "40",
// }

//create new product 
products.post('/api/add-product', (req, res) => {
    product.create(req.body, (err, user) => {
        if (err) return res.status(500).json({ error: err })
        res.status(200).json(user)
    })
})

// get all products
products.get('/api/get-product', (req, res) => {
    product.find({}, (err, products) => {
        if (err) return res.status(500).json({ error: err })
        res.status(200).json({ products, msg: "here is youre a products" })
    })
})

//update one product
products.put('/api/update-product/:id', (req, res) => {
    product.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, product) => {
        if (err) return res.status(500).json({ error: err })
        res.status(200).json({ product, msg: "product successfuly updated" })
    })
})

// delete product   
products.delete('/api/delete-product/:id', (req, res) => {
    product.findOneAndDelete({ _id: req.params.id }, (err, product) => {
        if (err) return res.status(500).json({ error: err })
        res.status(200).json({ product, msg: "product successfuly deleted" })
    })
})


module.exports = products