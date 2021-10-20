const express = require('express')
const app = express()

const mongoose  = require('mongoose');


const router = require('./routes');

// registering the dotenv content
require('dotenv').config()

// Connecting to mongodb
mongoose.connect('mongodb://localhost/zumas');


app.use(express.json())

// registering the port
const port = process.env.PORT 

// registering the api router
app.use('/api',router);



app.listen(port,()=>{
    console.log(`Server connected successfully on port ${port}`)
})