const express = require('express');
const {authenticateJwt, SECRET} = require('../middleware/auth');
const {User, Course, Admin} = require('../db');
const router = express.Router();

router.post('/signup', async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username});

    if(user) {
        res.status(403).json({message: 'User already exits'});
    }
     else {
        const newUser = new User({username, password});
        await newUser.save();
        const token = jwt.sign({username, role:'user'}, SECRET, {expiresIn: '1h'});
        res.json({message: 'User created successfully'});
     }
});


router.post('/login', async (req, res) => {
    const {username, password} = req.headers;
    const user = await User.findOne({username, password});
    if(user) {
        const token  = jwt.sign({username, role:'user'}, SECRET, {expiresIn: '1h'});
        res.json({message: 'Loggin in successfully', token});
    } else {
        res.status(403).json({message: 'Invalid username or password'});
    }
});

router.post('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findById(req.params.courseId);
    console.log(course);
    if (course) {
        const user = await Course.findById({username: req.user.username});
        if (user) {
            user.purchasedCourses.push(course);
        }
        await user.save();
        res.json({message: 'Course purchased successfully'});
    }
});