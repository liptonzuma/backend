const passport = require('passport')
const LocalStrategy = require('passport-local')

const user = require('../schema')

passport.use(new LocalStrategy(
    async (username,password,done)=>{
       const result = await user.findOne({username:username})
       console.log(result)
    }
))