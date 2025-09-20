class PortfolioController {
  index(req, res, next) {
    res.render('view/portfolio')  ;
  }
}

module.exports = new PortfolioController()
