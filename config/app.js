const Auth = require('../app/models/Auth')

module.exports = {
    name: 'Parking',
    version: '1.0.0',
    bcrypt: {
        salt: 10
    },
    validate: async function(req, res){
        const result = await Auth.check(req)
        if(!result){
            return res.status(404).redirect('/')
        }
    }
}