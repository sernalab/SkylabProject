const express = require('express')
const router = express.Router()

const addProject = require('./handlers/addProject')
const getAll = require('./handlers/getAll')
const getProject = require('./handlers/getProject')

router.get('/', getAll)
router.post('/add', addProject)
router.get('/project/:id', getProject)

module.exports = router
