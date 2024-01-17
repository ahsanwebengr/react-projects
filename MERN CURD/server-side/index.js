import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import user from './routes/user.js';
import { config } from 'dotenv';
config();

const port = process.env.PORT;
const dbStr = process.env.MONGODB_URL;

// Middlewares 
const app = express();
app.use(cors());
app.use(express.json());


// mongo DB connection 
mongoose.connect(dbStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes 
app.use('/', user);

// Server running 

app.listen(port, () => {
    console.log(`Server is listening on  http://localhost:${port}`);
});
