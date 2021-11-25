const express = require('express')
const app = express()
const mongoose  = require('mongoose');
const passport = require('passport')
const session = require('express-session')
const local = require('./strategies/localStrategy')

const router = require('./routes');
const auth = require('./authRouth')

// registering the dotenv content
require('dotenv').config()

// Connecting to mongodb
mongoose.connect('mongodb://localhost/api');

app.use(session({secret:'secret'}))

app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())
// registering the port
const port = process.env.PORT 

// registering the api router
app.use('/api',router);
app.use('/api/auth',auth)


app.listen(port,()=>{
    console.log(`Server connected successfully on port ${port}`)
})