const Database = require('./Database')

class Reservation{
    static table = 'reservations'
    static primaryKey = 'plate'

    static async all(){
        const response = await Database.query(`SELECT * FROM ${Reservation.table}`)

        return await response
    }

    static async find(id){
        return await Reservation.findBy(Reservation.primaryKey, id)
    }

    static async findBy(key, value){
        const response = await Database.query(`SELECT * FROM ${Reservation.table} WHERE ${key} = '${value}' LIMIT 1`)

        return await response[0]
    }

    static async create(data){
        if(!data){
            return false
        }

        const keys = Object.keys(data).join(',')
        const values = Object.values(data).map(value => `'${value}'`).join(',')

        const response = await Database.query(`INSERT INTO ${Reservation.table} (${keys}) VALUES (${values})`)

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

        const response = await Database.query(`UPDATE ${Reservation.table} SET ${values.join(',')} WHERE ${Reservation.primaryKey} = '${id}' LIMIT 1`)

        return await response
    }

    static async delete(id){
        const response = await Database.query(`DELETE FROM ${Reservation.table} WHERE ${Reservation.primaryKey} = '${id}' LIMIT 1`)

        return await response
    }
}

module.exports = Reservation