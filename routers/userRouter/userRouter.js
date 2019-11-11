const express = require('express');
const model = require('./userModel');
const router = express.Router();



router.get('/',(req,res) => {
    model.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err =>{
        res.status(500).json({message:'cannot get users.'})
    })
})

module.exports = router;