const express = require('express')
const router = express.Router()

const VariationController = require('../app/controllers/VariationController')

router.get('/', VariationController.index)

module.exports = router
