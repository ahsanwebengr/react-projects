import express from 'express';
const router = express.Router();
import User from '../models/User.js';
// REGISTER
router.post('/register', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});

export default router;
// LOGIN 