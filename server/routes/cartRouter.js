const cart = require('express').Router()

const Carts = require('../models/Cart')


// add one cart
cart.post('/api/add-cart', (req, res) => {
    Carts.create(req.body, (err, cart) => {
        if (err) return res.status(500).json({ error: true, msg: err })
        res.status(200).json(cart)
    })

})

// get UserCart
cart.get('/api/carts/:id', (req, res) => {
    Carts.find({ userid: req.params.id }, (err, carts) => {
        if (err) return res.status(500).json({ error: true, msg: err })
        res.status(200).json(carts)
    })
})


//update one Cart
cart.put('/api/update-cart/:id', (req, res) => {
    Carts.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, (err, cart) => {
        if (err) return res.status(500).json({ error: err })
        res.status(200).json({ msg: "Cart successfuly updated" })
    })
})

// delete Cart   
cart.delete('/api/delete-cart/:id', (req, res) => {
    Carts.findOneAndDelete({ _id: req.params.id }, (err, cart) => {
        if (err) return res.status(500).json({ error: err })
        res.status(200).json({ cart, msg: "product successfuly deleted" })
    })
})


module.exports = cart 