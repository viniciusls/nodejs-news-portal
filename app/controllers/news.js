module.exports.index = function (application, req, res) {
    const connection = application.config.database();
        const newsModel = new application.app.models.NewsDAO(connection);

        newsModel.getAll((error, result) => {
            res.render('news/index', { news: result });
        });
};
