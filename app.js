const app = require('./config/server');
const routes = require('./app/routes/web')(app);

app.listen(3000, () => {
    console.log('Server is running');
});
