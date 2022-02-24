const bcrypt = require('bcrypt')
const User = require('./User')
const auth = require('../../config/auth')

class Auth{
    static async validate(res, email, password){
        const user = await User.findBy('email', email)
        if(!user){
            return false
        }

        const result = await bcrypt.compare(password, user.password)
        if(!result){
            return false
        }

        await res.cookie(auth.cookie.name, JSON.stringify(user), {maxAge: auth.cookie.time, httpOnly: true})
        return true
    }

    static async check(req){
        return req.cookies && req.cookies[auth.cookie.name]
    }

    static async get(req){
        if(Auth.check(req)){
            return req.cookies[auth.cookie.name]
        }

        return undefined
    }
}

module.exports = Auth