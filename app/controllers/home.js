module.exports.index = function (application, req, res) {
    const connection = application.config.database();
    const newsModel = new application.app.models.NewsDAO(connection);

    newsModel.getAll(5, 0, (error, result) => {
        res.render('home/index', { news: result });
    });
};
