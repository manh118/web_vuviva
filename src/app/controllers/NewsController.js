class NewsController {
  index(req, res, next) {
    res.render('view/news')  ;
  }
}

module.exports = new NewsController()
