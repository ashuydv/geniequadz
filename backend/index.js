const express = require('express');
const { v4: uuidv4 } = require('uuid');

uuidv4();
const app = express()

app.get('/', (req, res) => {
    res.send('Home')
})

app.listen(5000, () => {
    console.log('hello');
    console.log(uuidv4());
})