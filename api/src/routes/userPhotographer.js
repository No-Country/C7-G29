const express = require('express')
const router = express.Router()

const {allPhotographers, registerPhotographer, updatePhotographer, deletePhotographer} = require('../controllers/userPhotographer.controller')


router.get('/', allPhotographers);

router.post('/', registerPhotographer);

router.put('/:id', updatePhotographer);

router.delete('/:id', deletePhotographer);

module.exports = router
