const express = require('express')
const router = express.Router()

const app = require('../../config/app')
const dirname = 'admin/reservations/'

// INDEX
router.get('/', function(req, res, next){
    res.render(`${dirname}index`, {
        title: `${app.name} | Reservas`
    })
})

// CREATE / STORE
router.get('/novo', function(req, res, next){
    res.render(`${dirname}create`, {
        title: `${app.name} | Nova Reserva`
    })
})

router.get('/novo/salvar', function(req, res, next){
    res.redirect('/reservas')
})

// EDIT / UPDATE
router.get('/editar/:id', function(req, res, next){
    res.render(`${dirname}edit`, {
        title: `${app.name} | Editar Reserva`
    })
})

router.post('/editar/:id/salvar', function(req, res, next){
    res.redirect('/reservas')
})

// DELETE
router.post('/deletar', function(req, res, next){
    res.redirect('/reservas')
})

module.exports = router