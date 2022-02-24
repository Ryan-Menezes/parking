const { redirect } = require('express/lib/response')
const app = require('../../config/app')
const dirname = 'admin/'
const Auth = require('../models/Auth')
const User = require('../models/User')

class AdminController{
    // INDEX
    static async index(req, res, next){
        await app.validate(req, res)

        const user = await Auth.get(req)
        const users = await User.all()

        res.render(`${dirname}index`, {
            title: `${app.name} | Início`,
            user: user,
            amount_users: users.length,
            amount_reservations: 0
        })
    }

    // LOGOUT
    static async logout(req, res, next){
        await Auth.logout(res)

        return res.status(404).redirect('/')
    }
}

module.exports = AdminController