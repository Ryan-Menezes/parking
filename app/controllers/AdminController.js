const { redirect } = require('express/lib/response')
const app = require('../../config/app')
const dirname = 'admin/'
const Auth = require('../models/Auth')

class AdminController{
    // INDEX
    static async index(req, res, next){
        if(!Auth.check(req)){
            return res.staus(404).redirect('/')
        }

        res.render(`${dirname}index`, {
            title: `${app.name} | Início`,
            user: Auth.get(req)
        })
    }
}

module.exports = AdminController