const Pool = require('pg').Pool;

const pool = new Pool({
    user: "sarim",
    password: process.env.DB_PASSWORD,
    host: "localhost",
    port: 5432,
    database: "perntodo"
})
console.log('Database connected');
module.exports = pool;
