const express = require('express')
const router = express.Router()

const app = require('../../config/app')
const dirname = 'admin/users/'

// INDEX
router.get('/', function(req, res, next){
    res.render(`${dirname}index`, {
        title: `${app.name} | Usuários`
    })
})

// CREATE / STORE
router.get('/novo', function(req, res, next){
    res.render(`${dirname}create`, {
        title: `${app.name} | Novo Usuário`
    })
})

router.get('/novo/salvar', function(req, res, next){
    res.redirect('/usuarios')
})

// EDIT / UPDATE
router.get('/editar/:id', function(req, res, next){
    res.render(`${dirname}edit`, {
        title: `${app.name} | Editar Usuário`
    })
})

router.post('/editar/:id/salvar', function(req, res, next){
    res.redirect('/usuarios')
})

// DELETE
router.post('/deletar', function(req, res, next){
    res.redirect('/usuarios')
})

module.exports = router