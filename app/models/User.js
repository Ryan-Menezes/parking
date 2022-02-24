const Database = require('./Database')

class User{
    static table = 'users'
    static primaryKey = 'id'

    static async all(){
        const response = await Database.query(`SELECT * FROM ${User.table}`)

        return await response
    }

    static async find(id){
        return await findBy(User.primaryKey, id)
    }

    static async findBy(key, value){
        const response = await Database.query(`SELECT * FROM ${User.table} WHERE ${key} = '${value}' LIMIT 1`)

        return await response[0]
    }

    static async create(data){
        console.log(data)
        if(!data){
            return false
        }

        const keys = Object.keys(data).join(',')
        const values = Object.values(data).map(value => `'${value}'`).join(',')

        const response = await Database.query(`INSERT INTO ${User.table} (${keys}) VALUES (${values})`)

        return await response
    }

    static async update(id, data){
        if(!data){
            return false
        }

        const values = []
        for(const key in data){
            values.push(`${key} = '${data[key]}'`)
        }

        const response = await Database.query(`UPDATE ${User.table} SET ${values.join(',')} WHERE ${User.primaryKey} = ${id} LIMIT 1`)

        return await response
    }

    static async delete(id){
        const response = await Database.query(`DELETE FROM ${User.table} WHERE ${User.primaryKey} = ${id} LIMIT 1`)

        return await response
    }
}

module.exports = User