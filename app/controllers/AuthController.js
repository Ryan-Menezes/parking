const app = require('../../config/app')
const dirname = 'auth/'
const Auth = require('../models/Auth')

class AuthController{
    // INDEX
    static async index(req, res, next){
        res.render(`${dirname}index`, {
            layout: false,
            title: `${app.name} | Login`
        })
    }

    // LOGIN VALIDATE
    static async validate(req, res, next){
        const data = req.body

        if(!Auth.validate(res, data.email, data.password)){
            return res.status(401).redirect('/')
        }

        res.status(200).redirect('/admin')
    }
}

module.exports = AuthController