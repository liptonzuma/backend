const express = require('express')
const app = express()

const mongoose  = require('mongoose');

const user  = require('./schema');


require('dotenv').config()

// Connecting to mongodb
mongoose.connect('mongodb://localhost/users');


app.use(express.json())
const port = process.env.PORT 


app.post('/',(req,res)=>{
    user.create(req.body)
    .then(res=> console.log(res))
    .catch(err=> console.log(err))

  
})

app.listen(port,()=>{
    console.log(`Server connected successfully on port ${port}`)
})