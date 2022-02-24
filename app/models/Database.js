const mysql = require('mysql')
const database = require('../../config/database')

class Database{
    static async query(sql){
        const connection = await mysql.createConnection(`${database.driver}://${database.username}:${database.password}@${database.hostname}/${database.name}`)

        const promise = new Promise(function(resolve, reject){
            connection.query(sql, function(error, response){
                if(error){
                    reject(error)
                }

                resolve(response)
            })
        })

        return await promise
    }
}

module.exports = Database