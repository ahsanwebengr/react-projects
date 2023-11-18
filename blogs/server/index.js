import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(express.json());

const port = process.env.PORT || 3100;
const str = process.env.MONGODB_URL;

import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import postRoute from './routes/posts.js';
import categoryRoute from './routes/categories.js';
import multer from 'multer'
import mongoose from "mongoose";

mongoose.connect(str).then(console.log('DB is connected successfully')).
    catch(err => console.log(err));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.get('/', (req, res) => {
    res.send('I love Node JS');
});


app.listen(port, () => {
    console.log(`Server listening on Port: ${port}`);
});