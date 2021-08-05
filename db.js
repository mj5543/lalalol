var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'a1523',
    database : 'protopages'
});

module.exports = db;