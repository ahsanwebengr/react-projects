const express = require('express');
// import express from 'express';
const router = express.Router();
const BookModel = require('../models/bookModel');
// import BookModel from '../models/bookModel';

// Post Books Route 
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author && !req.body.publishYear) {
            return res.status(400).send({ message: 'All fields are required' });
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        };

        const book = await BookModel.create(newBook);
        return res.status(200).send(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Get all books route 
router.get('/', async (req, res) => {
    try {
        const books = await BookModel.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Get by ID route 
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await BookModel.findById(id);

        return res.status(200).json(book);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


// Update a  Book Route 
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author && !req.body.publishYear) {
            return res.status(400).send({ message: 'All fields are required' });
        }

        const { id } = req.params;
        const result = await BookModel.findByIdAndUpdate(id, req.body);

        !result ? res.status(404).json({ message: 'Book not found' }) : res.status(200).send({ message: 'Book updated successfully' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for delete a book 
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await BookModel.findByIdAndDelete(id);

        !result ? res.status(404).json({ message: 'Book not found' }) : res.status(200).send({ message: 'Book Deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// export default router;
module.exports = router;