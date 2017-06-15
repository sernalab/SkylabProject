const express = require('express')
const router = express.Router()

const addUser = require('./handlers/addUser')
const getAll = require('./handlers/getAll')
const getUser = require('./handlers/getAll')

router.get('/', getAll)
router.post('/addUser', addUser)
router.get('/getUser/:id', getUser)

module.exports = router