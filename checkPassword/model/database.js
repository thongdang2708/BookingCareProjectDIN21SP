const Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database : "login",
    password : "1998",
    port : 5432
})

module.exports = pool;