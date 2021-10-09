const newRoutes = require('./news');
const newSite = require('./site');
const newBody = require('./body');
const newBlog = require('./blog');
function route(app) {
    app.use('/news', newRoutes);
    app.use('/body', newBody);
    app.use('/blog', newBlog);
    app.use('/', newSite);
    app.use('/search', newSite);
}
module.exports = route;
