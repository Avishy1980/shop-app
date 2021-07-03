const mongoose = require('mongoose')

const { Schema } = mongoose

const categories = new Schema({
    category: {
        type: String, required: true, unique: true
    }
})



module.exports = mongoose.model('categories', categories)