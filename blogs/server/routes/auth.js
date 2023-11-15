import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();
import User from '../models/User.js';
// REGISTER
router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPass
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});


// LOGIN 
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json('Wrong Credentials');

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json('Wrong Password');

        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });

    }
});

export default router;
