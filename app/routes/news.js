module.exports = (application) => {
    application.get('/news/:id', (req, res) => {
        application.app.controllers.news.index(application, req, res);
    });

    application.get('/news', (req, res) => {
        application.app.controllers.news.index(application, req, res);
    });
};
