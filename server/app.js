const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const routesUsers = require('./routes/users')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

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

module.exports = app