const express = require('express')
const router = express.Router()
const UserController = require('../../app/controllers/UserController')

// INDEX
router.get('/', UserController.index)

// CREATE / STORE
router.get('/novo', UserController.create)
router.post('/novo/salvar', UserController.store)

// EDIT / UPDATE
router.get('/:id/editar', UserController.edit)
router.post('/:id/editar/salvar', UserController.update)

// DELETE
router.get('/:id/deletar', UserController.delete)

module.exports = router