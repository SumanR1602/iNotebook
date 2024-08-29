const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs')
var jwt=require('jsonwebtoken')
var fetchuser = require('../middleware/fetchuser')


const JWT_SECRET='itsSuman'

// ROUTE 1 :using POST /api/auth/createuser No login Required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password must be 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    let success=false;
    console.log(req.body);
    // if there are errors return bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    try {
        // Check is user with email exists already
        let user = await User .findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({success, error: "Sorry a user with this email already exists!!" })
        }

        const salt=await bcrypt.genSalt(10);
        const secPass=await bcrypt.hash(req.body.password,salt)

        // Create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        })
        const data={
            user:{
                id: user.id
            }
        }
        const authToken=jwt.sign(data,JWT_SECRET);
        
        // res.json(user)
        success=true;
        res.json({success,authToken});
    } 
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some ERROR Ocuured")
    }
})


// ROUTE 2 :Authenticate login at POST "/api/auth/login -login required"
router.post('/login', [
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body;
    try{
        let user=await User.findOne({email});
        if(!user){
            success=false
            return res.status(400).json({error:"Please try to login with correct Credetials"})
        }
        const passwordComapare=await bcrypt.compare(password,user.password);
        if(!passwordComapare){
            success=false
            return res.status(400).json({success,error:"Please try to login with correct Credetials"})
        }
        const data={
            user:{
                id: user.id
            }
        }
        const authToken=jwt.sign(data,JWT_SECRET);
        success=true
        res.json({success,authToken})
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server ERROR Ocuured")
    }
})
// ROUTE 3 :get loggedin user data at POST "/api/auth/getuser - Login required"
router.post('/getuser',fetchuser,async (req, res) => {
    try{
        const userId=req.user.id;
        const user=await User.findById(userId).select("-password")
        res.send(user)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server ERROR Ocuured")
    }
})

module.exports = router
