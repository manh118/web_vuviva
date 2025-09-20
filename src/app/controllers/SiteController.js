class SiteController {

  //[Get] home
  index(req, res, next) {
    res.render('view/home')  
  }
}

module.exports = new SiteController()
