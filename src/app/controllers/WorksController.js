const Work = require("../models/Work");
const WorkCategory = require("../models/WorkCategory");

class WorksController {
  //Danh sách all
  index(req, res, next) {
    Promise.all([Work.find({}).lean(), WorkCategory.find().lean()])
      .then(([Works, WorkCategories]) => {
        res.render("view/works", { Works, WorkCategories });
      })
      .catch(next);
  }

  // Hiện thị theo nhãn
  async category(req, res, next) {
    try {
      const category = req.params.category; 

      const WorkCategories = await WorkCategory.find({}).lean();

      let Works;

      if (category === "all") {
        Works = await Work.find({}).populate("category").lean();
      } else {
        // tìm category theo title
        const foundCategory = await WorkCategory.findOne({ title: category }).lean();
        if (foundCategory) {
          Works = await Work.find({ category: foundCategory._id }).populate("category").lean();
        } else {
          Works = []; 
        }
      }

      res.render("view/works", { Works, WorkCategories });
    } catch (err) {
      next(err);
    }
  }
  //Hien thi chi tiet
  async workDetail(req, res, next){
    try {

       const workId = req.params.id;
       const WorkDetail = await Work.findById(workId).populate('category').lean();

      
      const WorkCategories = await WorkCategory.find({}).lean();
      res.render("view/workDetail", { WorkDetail, WorkCategories });
    } catch (err) {
      next(err)
    }
  }
}

module.exports = new WorksController();
