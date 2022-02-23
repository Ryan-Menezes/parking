const express = require('express')
const router = express.Router()

const app = require('../../config/app')
const dirname = 'auth/'

router.get('/', function(req, res, next){
    res.render(`${dirname}index`, {
        layout: false,
        title: `${app.name} | Login`
    })
})


module.exports = router