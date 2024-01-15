import express from 'express';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';

import user from './routes/user.js';

const port = 3001;
// Middlewares 
const app = express();
app.use(cors());
app.use(express.json());


// mongo DB connection 

mongoose.connect('mongodb://127.0.0.1:27017/curd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// Routes 
app.use('/', user);



// Server running 

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
