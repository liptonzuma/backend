const express = require('express')
const authRouther = express.Router()
const passport = require('passport')

const user = require('./schema')


authRouther.post('/login',passport.authenticate('local'),(req,res)=>{
    console.log('Logged in')
    res.send(req.user)
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
    user.create(req.body)

    .then(data=> {
        res.redirect('/login')

    })
    .catch(err=> {
        res.sendStatus(406,err.message)
        console.log(err.message)
    })
  
})

module.exports = authRouther
