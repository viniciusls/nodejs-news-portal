module.exports = (application) => {
    application.post('/news/create', (req, res) => {
        application.app.controllers.admin.create(application, req, res);
    });

    application.get('/news/create', (req, res) => {
        application.app.controllers.admin.save(application, req, res);
    });
};
