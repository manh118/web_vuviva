class WorksController {
  index(req, res, next) {
    res.render('view/works')  ;
  }
}

module.exports = new WorksController()
