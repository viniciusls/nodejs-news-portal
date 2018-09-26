module.exports = (application) => {
    application.post('/news/create', (req, res) => {
        const noticia = req.body;
        const connection = application.config.database();
        const newsModel = new application.app.models.NoticiasDAO(connection);

        newsModel.save(noticia, (error, result) => {
            res.redirect('news');
        });
    });

    application.applicationget('/news/create', (req, res) => {
        res.render('admin/news/create');
    });
};
