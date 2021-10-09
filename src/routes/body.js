const express = require('express')
const router = express.Router()

const bodyController = require('../app/controllers/BodyController')
router.use('/',bodyController.index)

module.exports = router