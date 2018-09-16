const mysql = require('mysql');

module.exports = () => mysql.createConnection({
        host: 'localhost',
        database: 'nodejs-news-portal',
        user: 'root',
        password: 'root'
    });

