const express = require('express')
const router = express.Router()
const AuthController = require('../../app/controllers/AuthController')

router.get('/', AuthController.index)
router.post('/login/validate', AuthController.validate)

module.exports = router