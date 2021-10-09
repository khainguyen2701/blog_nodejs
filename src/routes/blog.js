const express = require('express')
const  routes = express.Router()
const blogController = require('../app/controllers/BlogController')


routes.use('/',blogController.index)

module.exports = routes