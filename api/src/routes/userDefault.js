const express = require('express')
const { default: mongoose } = require('mongoose')
const userDefaultSchema = require('../models/userDefault')
const bcrypt = require('bcrypt')

const router = express.Router()


router.get('/', (req, res) => {
  userDefaultSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

router.post('/', async(req, res) => {
  const {_id, name, lastName, email, password, admin, banned} = req.body

  const passwordHash = await bcrypt.hash(password, 10)

  const user = await userDefaultSchema({
    _id,
    name,
    lastName,
    email,
    password: passwordHash,
    admin,
    banned
  })

  await user.save()

  res.json(user)
})

router.put('/:id', (req, res) => {
  userDefaultSchema.updateOne(
    {_id: req.params.id},
    req.body
  )
    .then(() => res.send('datos actualizados correctamente'))
    .catch((error) => res.json({message: error}))
})

router.delete('/:id', (req,res) => {
  userDefaultSchema.findByIdAndDelete(req.params.id)
    .then(() => res.send('usuario eliminado correctamente'))
    .catch((error) => res.json({message: error}))
})


module.exports = router