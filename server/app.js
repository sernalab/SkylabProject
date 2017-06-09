const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const path = require('path')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const dbUrl = process.env.DB_URL
const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, '../dist')))

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

// /* DEBUG req.body */
// app.use((req, res, next) => {
//   require('debug')('body-parser')(req.body)
//   next()
// })

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)
