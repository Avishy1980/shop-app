require('dotenv').config();
const jwt = require('jsonwebtoken')
const user = require('../models/User')

module.exports = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        res.status(422).send({ error: true, message: 'Unauthorized User' })
    } else {
        const token = authorization.replace('Bearer ', '')
        //  (long string , secret key , ()=>{})
        jwt.verify(token, process.env.JWT, (err, token) => {
            if (err) {
                res.status(500).send({ error: true, message: 'you are not authorized!' })
            } else {
                const { _id } = token
                const authorizedUser = user.findById(_id)
                req.authorizedUser = authorizedUser
                next()
            }
        })
    }
}






