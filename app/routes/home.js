module.exports = (app) => {
    app.get('/', (req, res) => {
        application.app.controllers.home.index(application, req, res);
    });
};
