const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const routesUsers = require('./routes/users')

app.use( cors() )

/* static folder */
app.use(express.static(path.join(__dirname, '../dist')))

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* DEBUG req.body */
app.use((req, res, next) => {
  require('debug')('body-parser')(req.body)
  next()
})

app.use('/api/users', routesUsers)

module.exports = app
