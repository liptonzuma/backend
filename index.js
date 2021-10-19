const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
require('dotenv').config()

app.use(bodyParser());
app.use(express.json())
const port = process.env.PORT || 5000

const users =  []

app.post('/',(req,res)=>{

   const username = req.body.username;
   const age = req.body.age;
   const email = req.body.email;

   const user = {
       username,
       age,
       email,
   }

   users.push(user);
   console.log(users);
})

app.listen(port,()=>{
    console.log(`Server connected successfully on port ${port}`)
})