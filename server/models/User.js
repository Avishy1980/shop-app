const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
// destructering Schema func from mongoose 
const { Schema } = mongoose


// blueprint of users
const userSchema = new Schema({
    name: {
        type: String, required: true, unique: true
    },
    email: {
        type: String, required: true, unique: true
    },
    password: {
        type: String, required: true, unique: true
    },
    nickname: {
        type: String, required: true, unique: true
    }
},
    { collection: 'users' })


userSchema.pre('save', function (next) {
    const user = this
    !user.isModified('password') ? next() : null
    bcrypt.genSalt(10, (err, salt) => {
        err ? next(err) : null
        bcrypt.hash(user.password, salt, (err, hash) => {
            err ? next(err) : null
            user.password = hash
            next()
        })
    })
})



// exports the collection 
module.exports = mongoose.model('users', userSchema)

