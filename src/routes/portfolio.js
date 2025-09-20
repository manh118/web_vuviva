const express = require('express')
const router = express.Router()

const PortfolioController = require('../app/controllers/PortfolioController')

router.get('/', PortfolioController.index)

module.exports = router
