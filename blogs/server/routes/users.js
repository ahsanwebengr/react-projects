import express from 'express';
import bcrypt from 'bcrypt';
const router = express.Router();

import User from '../models/User.js';

// UPDATE
router.put('/:id', async (req, res) => {
    if (res.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });

            response.status(200).json(updatedUser);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(401).json('You must be have account to update!');
    }
});


// DELETE  
router.delete('/login', async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });

    }
});

export default router;
