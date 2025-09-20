const express = require('express')
const router = express.Router()

const WorksController = require('../app/controllers/WorksController')

router.get('/', WorksController.index)

module.exports = router
