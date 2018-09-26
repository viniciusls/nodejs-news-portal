module.exports = (application) => {
    application.post('/news/create', (req, res) => {
        const news = req.body;

        req.assert('title', 'Título não pode ser vazio.').notEmpty();
        req.assert('author', 'Autor não pode ser vazio.').notEmpty();
        req.assert('content', 'Notícia não pode ser vazia.').notEmpty();
        req.assert('summary', 'Resumo não pode ser vazio.').notEmpty();
        req.assert('summary', 'Resumo deve conter entre 10 e 100 caracters.').len(10, 100);
        req.assert('news_at', 'Data da notícia não pode ser vazia.').notEmpty()/*.isDate({ format: 'YYYY-MM-DD' })*/;

        const errors = req.validationErrors();

        if (errors) {
            res.redirect('/news/create', { errors, news });

            return;
        }

        const connection = application.config.database();
        const newsModel = new application.app.models.NewsDAO(connection);

        newsModel.save(news, (error, result) => {
            res.redirect('/news');
        });
    });

    application.get('/news/create', (req, res) => {
        res.render('admin/news/create', { errors: {}, news: {} });
    });
};
