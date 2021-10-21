const express = require('express')
const authRouther = express.Router()
const passport = require('passport')


authRouther.post('/login',passport.authenticate('local'),(req,res)=>{
    res.status(200)
})

module.exports = authRouther
