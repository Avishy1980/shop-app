require('dotenv').config();
const users = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
// import user schema
const User = require('../models/User')
const verifyToken = require('../middlewares/verifyToken')

// req body example:
// {
//     "name": "orel",
//     "email":"p@p.com",
//     "password": "12345",
//     "nickname": "orelosh"
// }

//create new user 
users.post('/api/register', async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        const { _id, nickname } = user
        const token = jwt.sign({ _id, nickname }, process.env.JWT)
        res.send({ token })
    } catch (err) {
        return res.status(422).send(err.message)
    }
})


users.post('/api/login', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(422).send({ error: 'Invalid email or password' })
    const user = await User.findOne({ email })
    if (!user) return res.status(422).send({ error: 'Invalid password or email' })
    try {
       await bcrypt.compare(password, user.password, (err, isMatch) => {
           if (err) return console.log(err)
            if (!isMatch) return res.status(422).send({ error: 'Invalid password or email' })
            const { _id, nickname } = user
            const token = jwt.sign({ _id, nickname }, process.env.JWT)
            res.send({ token })
        })
        } catch (err) {
        return res.status(422).send({ error: 'Invalid password or email' })
    }
})







module.exports = users