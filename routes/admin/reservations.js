const express = require('express')
const router = express.Router()
const ReservationController = require('../../app/controllers/ReservationController')

// INDEX
router.get('/', ReservationController.index)

// CREATE / STORE
router.get('/novo', ReservationController.create)
router.post('/novo/salvar', ReservationController.store)

// EDIT / UPDATE
router.get('/:id/editar', ReservationController.edit)
router.post('/:id/editar/salvar', ReservationController.update)

// DELETE
router.get('/:id/deletar', ReservationController.delete)

module.exports = router