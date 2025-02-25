const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "todoapp",
});

console.log("Connected to DB");

module.exports = pool;