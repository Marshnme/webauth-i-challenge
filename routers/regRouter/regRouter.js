const express = require('express');
const model = require('../userRouter/userModel');
const router = express.Router();
const bcrypt = require('bcrypt');



router.post('/',(req,res) => {
    let user = req.body;
    const hashPass = bcrypt.hashSync(user.password, 8)
    user.password = hashPass
    model.add(user)
    .then(newUser => {
        req.session.username = newUser.username;
        res.status(200).json(newUser)
    })
    .catch(err => {
        res.status(500).json({message:'could not reg user'})
    })
})

module.exports = router;