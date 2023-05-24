const authRouter = require('./auth.route.js');
const coursesRouter = require('./courses.route.js');
function routerApi(app) {
    // app.use('/auth', authRouter);
    app.use('/courses', coursesRouter);
    app.use('/test', (req, res) => {
        res.send('Hello world');
    }
    );
}

module.exports = {
    routerApi
}