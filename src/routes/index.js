const siteRouter = require('./site')
const portfolioRouter = require('./portfolio')
const worksRouter = require('./works')
const variationRouter = require('./variation')
const newsRouter = require('./news')
const officeRouter = require('./office')

function route(app) {

  app.use('/', siteRouter);
  app.use('/portfolio', portfolioRouter);
  app.use('/works', worksRouter);
  app.use('/variation', variationRouter);
  app.use('/news', newsRouter);
  app.use('/office', officeRouter);

}

module.exports = route
