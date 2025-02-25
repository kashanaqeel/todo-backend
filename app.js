const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todo.routes');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({msg: "HomePage"});
});

app.use('/todos', todoRoutes);

module.exports = app;