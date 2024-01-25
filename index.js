const express = require('express');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/twitter',(req,res) => {
    res.send('This is twitter page'); 
})

app.get('/login',(req,res) => {
    res.send('<h1>This is login page</h1>');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})