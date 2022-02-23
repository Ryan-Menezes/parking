const express = require('express')
const router = express.Router()

const app = require('../../config/app')
const dirname = 'admin/'

router.get('/', function(req, res, next){
    res.render(`${dirname}index`, {
        title: `${app.name} | Início`
    })
})

module.exports = router