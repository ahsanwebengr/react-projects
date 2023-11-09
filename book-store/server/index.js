const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const booksRoute = require('./routes/booksRoute');
const app = express();

app.use(express.json());
app.use(cors());


app.use('/books', booksRoute);

require('dotenv').config();
const port = process.env.PORT || 3100;
const str = process.env.CONNECTION_STRING;

// Welcome root 
app.get('/', (req, res) => {
    res.send('Welcome');
});



mongoose.connect(str).then(() => {
    console.log('App is connected to DB');
    app.listen(port, () => {
        console.log(`Server listening on Port: ${port}`);
    });
}).catch(err => console.log(err));
