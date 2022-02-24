const app = require('../../config/app')
const dirname = 'admin/users/'
const bcrypt = require('bcrypt')
const User = require('../models/User')

class UserController{
    // INDEX
    static async index(req, res, next){
        await app.validate(req, res)

        const users = await User.all()
        
        res.render(`${dirname}index`, {
            title: `${app.name} | Usuários`,
            users: users
        })
    }

    // CREATE / STORE
    static async create(req, res, next){
        await app.validate(req, res)

        res.render(`${dirname}create`, {
            title: `${app.name} | Novo Usuário`
        })
    }

    static async store(req, res, next){
        await app.validate(req, res)

        const data = await req.body

        if(!data.first_name || !data.last_name || !data.phone || !data.email){
            return res.status(404).redirect('/admin/usuarios')
        }

        data.password = await bcrypt.hash(data.password, app.bcrypt.salt)

        const result = await User.create(req.body)

        return res.status(200).redirect('/admin/usuarios')
    }

    // EDIT / UPDATE
    static async edit(req, res, next){
        await app.validate(req, res)

        const user = await User.find(req.params.id)
        if(!user){
            return res.status(404).redirect('/admin/usuarios')
        }

        res.render(`${dirname}edit`, {
            title: `${app.name} | Editar Usuário`,
            user: user
        })
    }

    static async update(req, res, next){
        await app.validate(req, res)

        const data = await req.body
        if(data.password){
            data.password = await bcrypt.hash(data.password, app.bcrypt.salt)
        }else{
            delete data.password
        }

        if(!data.first_name || !data.last_name || !data.phone || !data.email){
            return res.status(404).redirect('/admin/usuarios')
        }

        const user = await User.find(req.params.id)
        if(!user){
            return res.status(404).redirect('/admin/usuarios')
        }

        const result = await User.update(user.id, req.body)

        return res.status(200).redirect('/admin/usuarios')
    }

    // DELETE
    static async delete(req, res, next){
        await app.validate(req, res)

        const user = await User.find(req.params.id)
        if(!user){
            return res.status(404).redirect('/admin/usuarios')
        }

        await User.delete(req.params.id)

        return res.status(404).redirect('/admin/usuarios')
    }
}

module.exports = UserController