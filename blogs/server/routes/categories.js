import express from 'express';
const router = express.Router();

import Category from '../models/Category.js';

// POST CATEGORY 
router.post('/', async (req, res) => {
    try {
        const newCategory = await Category(req.body);
        const savedCategory = await newCategory.save();

        res.status(200).json(savedCategory);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ALL CATEGORIES 

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();

        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;
