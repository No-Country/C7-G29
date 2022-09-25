const express = require('express')
const userDefault = require('./userDefault')
const userPhotographer = require('./userPhotographer')

const router = express.Router()

router.use('/usersDefault', userDefault)
router.use('/usersPhotographer', userPhotographer)

module.exports = router