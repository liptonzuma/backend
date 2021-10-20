const mongoose  = require('mongoose');

const schema = mongoose.Schema;

const user_schema = new schema(
  {
      username:{
          type:String,
          require:true
      },
      email :{
          type:String,
          require:true
      },
      age : {
          type:String,
          require:true,
      },
      available :{
          type:Boolean,
          default : false
      }

  }
)

// Create a user model to use the user_Schema

const user = mongoose.model('user',user_schema);

//  Export the ninja model,
//  A model is an idea of how a real thing would look like.
module.exports = user;