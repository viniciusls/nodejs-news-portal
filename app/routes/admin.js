const database = require('../../config/database');

module.exports = (app) => {
    app.post('/news/create', (req, res) => {
        const noticia = req.body;
        const connection = database();

        connection.query('INSERT INTO news SET ?', noticia, (error, result) => {
            res.redirect('news/index');
        });
    });

    app.get('/news/create', (req, res) => {
        res.render('admin/news/create');
    });
};
