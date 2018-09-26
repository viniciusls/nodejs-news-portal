const mysql = require('mysql');

const connMySQL = () => {
    mysql.createConnection({
        host: 'localhost',
        database: 'nodejs-news-portal',
        user: 'root',
        password: 'root'
    });
};

module.exports = () => connMySQL;
