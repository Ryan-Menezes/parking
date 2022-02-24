const express = require('express')
const router = express.Router()
const AdminController = require('../../app/controllers/AdminController')

router.get('/', AdminController.index)
router.get('/sair', AdminController.logout)

module.exports = router