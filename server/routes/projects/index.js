const express = require('express')
const router = express.Router()

const addProject = require('./handlers/addProject')
// const getAll = require('./handlers/getAll')

// router.get('/', getAll)
router.post('/', addProject)

module.exports = router