const express = require('express');
const app = express();
const db = require('./db');

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});

const todoRoute = require('./routes/todo');

app.use('/todo', todoRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});