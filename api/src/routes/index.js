const express = require('express')
const userDefault = require('./userDefault')

const router = express.Router()

router.use('/usersDefault', userDefault)

module.exports = router