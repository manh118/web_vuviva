const express = require('express')
const router = express.Router()

const OfficeController = require('../app/controllers/OfficeController')

router.get('/', OfficeController.index)

module.exports = router
