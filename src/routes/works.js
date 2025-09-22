const express = require('express')
const router = express.Router()

const WorksController = require('../app/controllers/WorksController')

router.get('/', WorksController.index)
router.get("/category/:category", WorksController.category);
router.get('/:id', WorksController.workDetail)

module.exports = router
