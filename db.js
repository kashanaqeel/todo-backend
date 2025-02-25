const { Pool } = require('pg');
require("dotenv").config();

const pool = new Pool({
    user: 'postgres',
    password: 'wellauthenticate',
    host: 'localhost',
    port: 5432,
    database: 'todoapp'
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};