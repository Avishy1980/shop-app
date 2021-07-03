require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require('./routes/userRouts')
const cartRouter = require('./routes/cartRouter')
const productRouter = require('./routes/productRouts')
const categoriesRouter = require('./routes/categoriesRouter')
//get the db configuration
const config = require('./dbConfig/db')

// bring me express function from express library
const app = express()
// make my entire app readable 
app.use(express.json())
//cors make sure that the difference between the two PORTS (server and client) will not yell about it
app.use(cors())
//my PORT
const PORT = process.env.PORT || 4500

// -------------------MongoDB------------------------
mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log("mongo succsesfuly connected!"),
    (err) => console.log(`error by connecting to monogo` + err))
// -------------------end----------------------------

// use the userRouter routes
app.use(userRouter, productRouter, categoriesRouter, cartRouter)



// start server and listen on port
app.listen(PORT, () => console.log(`app listen on port http://localhost/${PORT}`))