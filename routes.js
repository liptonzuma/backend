const express = require('express');
const router = express.Router();


const user  = require('./schema');

router.get('/',(req,res)=>{
    res.send('Welcome')
})

router.delete('/:id',(req,res)=>{

    user.findByIdAndRemove({_id:req.params.id})
    
    .then((data)=>{
        res.send(data)
        console.log(data)
    })
})

router.post('/',(req,res)=>{
    // using the user model to create new user in the mongodb database
    user.create(req.body)

    .then(data=> {
        res.send(data)
        console.log(data)
    })
    .catch(err=> {
        res.sendStatus(406,err.message)
        console.log(err.message)
    })

  
})
module.exports = router;