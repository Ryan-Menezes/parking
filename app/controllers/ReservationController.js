const app = require('../../config/app')
const dirname = 'admin/reservations/'
const bcrypt = require('bcrypt')
const Reservation = require('../models/Reservation')

class ReservationController{
    // INDEX
    static async index(req, res, next){
        await app.validate(req, res)

        const reservations = await Reservation.all()
        
        res.render(`${dirname}index`, {
            title: `${app.name} | Reservas`,
            reservations: reservations
        })
    }

    // CREATE / STORE
    static async create(req, res, next){
        await app.validate(req, res)

        res.render(`${dirname}create`, {
            title: `${app.name} | Nova Reserva`
        })
    }

    static async store(req, res, next){
        await app.validate(req, res)

        const data = await req.body
        if(!data.plate || !data.brand || !data.model || !data.cpf || !data.phone || !data.email){
            return res.status(404).redirect('/admin/reservas')
        }

        const result = await Reservation.create(req.body)

        return res.status(200).redirect('/admin/reservas')
    }

    // EDIT / UPDATE
    static async edit(req, res, next){
        await app.validate(req, res)

        const reservation = await Reservation.find(req.params.id)
        if(!reservation){
            return res.status(404).redirect('/admin/reservas')
        }

        res.render(`${dirname}edit`, {
            title: `${app.name} | Editar Reserva`,
            reservation: reservation
        })
    }

    static async update(req, res, next){
        await app.validate(req, res)

        const data = await req.body
        if(!data.plate || !data.brand || !data.model || !data.cpf || !data.phone || !data.email){
            return res.status(404).redirect('/admin/reservas')
        }

        const reservation = await Reservation.find(req.params.id)
        if(!reservation){
            return res.status(404).redirect('/admin/reservas')
        }

        const result = await Reservation.update(reservation.plate, req.body)

        return res.status(200).redirect('/admin/reservas')
    }

    // DELETE
    static async delete(req, res, next){
        await app.validate(req, res)

        const reservation = await Reservation.find(req.params.id)
        if(!reservation){
            return res.status(404).redirect('/admin/reservas')
        }

        await Reservation.delete(req.params.id)

        return res.status(404).redirect('/admin/reservas')
    }
}

module.exports = ReservationController