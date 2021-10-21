const express = require('express')
const authRouther = express.Router()
const passport = require('passport')


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

module.exports = authRouther
