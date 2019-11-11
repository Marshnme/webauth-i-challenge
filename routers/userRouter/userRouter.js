const express = require('express');
const model = require('./userModel');
const router = express.Router();



router.get('/',(req,res) => {
    let {username,password} = req.headers;

    if(username && password){
        model.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err =>{
            res.status(500).json({message:'cannot get users.'})
        })
    }else{
        res.status(400).json({message:'need login'})
    }
    
})

module.exports = router;