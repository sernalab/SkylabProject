const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const routesProjects = require('./routes/projects')

app.use(cors())

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

app.use('/api/projects', routesProjects)

module.exports = app
