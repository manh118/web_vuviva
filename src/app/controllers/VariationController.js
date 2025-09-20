class VariationController {
  index(req, res, next) {
    res.render('view/variation')  ;
  }
}

module.exports = new VariationController()
