const express = require('express');
const model = require('../userRouter/userModel');
const router = express.Router();
const bcrypt = require('bcrypt');


router.post('/',(req,res) => {
    let {username,password} = req.body;

    model.findBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)){
            res.status(200).json({message:`welcome ${user.username}`})
        }else{
            res.status(400).json({message:`invalid login info`})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router;