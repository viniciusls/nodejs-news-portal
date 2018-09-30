module.exports.index = function (application, req, res) {
    const connection = application.config.database();
    const newsModel = new application.app.models.NewsDAO(connection);

    const id = req.params.id;

    if (id) {
        newsModel.getById(id, (error, result) => {
            res.render('news/view', { news: result });
        });
    } else {
        newsModel.getAll(null, null, (error, result) => {
            res.render('news/index', { news: result });
        });
    }
};
