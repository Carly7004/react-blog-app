const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Registration

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json
    }
})


// Login

router.post('/login', async (req, res) => {
    try{
        //USERNAME FIND AND VALIDATION
        const user = await User.findOne({username: req.body.username})
        !user && req.status(400).json('wrong credentials')
        //Passward validation

        const validated = await bcrypt.compare(req.body.password, user.password)
        !validated && res.status(400).json('wrong credentials')

        // res.status(200).json(user)
        //disable sending user password data to user
        const { password, ...others } = user._doc;
        res.status(200).json(others)

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router