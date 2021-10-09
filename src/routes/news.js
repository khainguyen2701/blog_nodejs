const express = require('express')
const router = express.Router()

const newController = require('../app/controllers/NewController')

router.use('/:slug',newController.slug)
router.use('/',newController.index)

module.exports = router