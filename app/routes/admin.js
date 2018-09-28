module.exports = (application) => {
    application.get('/news/create', (req, res) => {
        application.app.controllers.admin.create(application, req, res);
    });

    application.post('/news/create', (req, res) => {
        application.app.controllers.admin.store(application, req, res);
    });
};
