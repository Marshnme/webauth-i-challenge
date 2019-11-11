const express = require('express');
const model = require('../userRouter/userModel');
const router = express.Router();



router.post('/',(req,res) => {
    let user = req.body;

    model.add(user)
    .then(newUser => {
        res.status(200).json(newUser)
    })
    .catch(err => {
        res.status(500).json({message:'could not reg user'})
    })
})

module.exports = router;