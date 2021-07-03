const category = require('express').Router()

const Categories = require('../models/Categories')


category.post('/api/add-categories', (req, res) => {
    Categories.create(req.body, (err, category) => {
        if (err) return res.status(500).json({ error: err })
        res.status(200).json(category)
    })

})

category.get('/api/categories', (req, res) => {
    Categories.find({}, (err, categories) => {
        if (err) return res.status(500).json({ error: err })
        res.status(200).json(categories)
    })
})

module.exports = category 