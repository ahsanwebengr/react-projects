const mongoose = require('mongoose');
// import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: Number,
        required: true
    },
},
    { timestamps: true }
);

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;
// export default BookModel;