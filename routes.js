const express = require('express');
const router = express.Router();


const user  = require('./schema');

router.get('/',(req,res)=>{
    res.send('Welcome')
})
// deleting a particular data
router.delete('/:id',(req,res)=>{

    user.findByIdAndRemove({_id:req.params.id})

    .then((data)=>{
        res.send(data)
        console.log(data)
    })
})
// updating a current user's data
router.put('/:id',(req,res)=>{
    user.findByIdAndUpdate({_id:req.params.id},req.body)
    .then(()=>{
        user.findOne({_id:req.params.id}).then(data=>res.send(data))
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