const express = require('express')
const userDefault = require('./userDefault')
const userPhotographer = require('./userPhotographer')
const publication = require('./publication')
const challenge = require("./challenges")

const router = express.Router()

router.use('/usersDefault', userDefault)
router.use('/usersPhotographer', userPhotographer)
router.use('/publication', publication)
router.use("/challenge", challenge);

module.exports = router;