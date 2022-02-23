const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.set('views', path.join(__dirname, 'app/views'))
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static(path.join(__dirname, 'public')))

// ROUTES
const auth = require('./routes/auth/index')
const admin = require('./routes/admin/index')
const users = require('./routes/admin/users')
const reservations = require('./routes/admin/reservations')

app.use('/', auth)
app.use('/admin', admin)
app.use('/admin/usuarios', users)
app.use('/admin/reservas', reservations)

app.listen(3000, function(){
    console.log('SERVER STARTED')
})