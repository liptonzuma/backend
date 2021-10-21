const passport = require('passport')
const LocalStrategy = require('passport-local')

const User = require('../schema')

passport.serializeUser((user,done)=>{
    done(null,user.username)
})

// we get the username from the serialized user
passport.deserializeUser((username,done)=>{
    User.findOne({username:username})
    .then(user=> {
        done(null,user)
    })
    .catch(err=> {
        done(err,false)
    })
})

passport.use(new LocalStrategy(
    // in the done middleware, the null parameter is the error
    //  and the second parameter is the user
    async (username,password,done)=>{
       const result = await User.findOne({username:username})
      if(!result){
          done(null,false)
      }
      else if(result){
          if(result.password === password){
              done(null,result)
          }else{
              done(null,false)
          }
      }
       
       
    }
))