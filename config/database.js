const mysql = require('mysql');

const connMySQL = () => mysql.createConnection({
        host: 'localhost',
        database: 'nodejs-news-portal',
        user: 'root',
        password: ''
    });

module.exports = () => connMySQL;
