const express = require('express')
const authRouther = express.Router()
const passport = require('passport')

const user = require('./schema')

const bcrypt = require('bcrypt')


authRouther.post('/login',(req,res)=>{
    user.find({username:req.body.username})
    .then((data)=>{
        res.send(data)
    })
})
authRouther.get('/home',(req,res)=>{
    if(req.user){
        res.send(200)
    }else{
        res.send(404)
    }
})

authRouther.get('/login',(req,res)=>{
    res.send('You\'re in the login page')
})

authRouther.post('/register',(req,res)=>{
    // using the user model to create new user in the mongodb database
    let password = req.body.password;

    bcrypt.hash(password,10).then( (hash)=> {
        user.create({
        username:req.body.username,
        email:req.body.email,
        password:hash,
        age:req.body.age

    })
    })

    .then(data=> {
        res.redirect('/login')

    })
    .catch(err=> {
        res.sendStatus(406,err.message)
        console.log(err.message)
    })
  
})

module.exports = authRouther
