class OfficeController {
  index(req, res, next) {
    res.render('view/office')  ;
  }
}

module.exports = new OfficeController()
