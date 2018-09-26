module.exports = (application) => {
    const connection = application.config.database();

    application.get('/news', (req, res) => {
        const newsModel = new application.app.models.NoticiasDAO(connection);

        newsModel.getAll((error, result) => {
            res.render('news/index', { news: result });
        });
    });
};
