const express = require('express')
const router = express.Router()

const{registerUser, updateUser, deleteUser, allUsers} = require('../controllers/userDefault.controller')


router.get('/', allUsers);

router.post('/', registerUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router