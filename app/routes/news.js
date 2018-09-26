const database = require('../../config/database');

module.exports = (app) => {
    app.get('/news', (req, res) => {
        const connection = database();

        connection.query('SELECT * FROM news', (error, result) => {
            res.render('news/index', { news: result });
        });
    });
};
