const express = require('express');
const path = require('path');
const {db} = require('./config/db');
const app = express();
app.use(express.json());

app.use('/gigs', require('./routes/gigs'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () =>{
    console.log('Server is running');
});