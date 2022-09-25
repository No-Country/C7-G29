const express = require('express')
const userPhotographerSchema = require('../models/userPhotographer')

const router = express.Router()

router.get('/', async(req, res) => {
  try {
    const users = await userPhotographerSchema.find()

    if(users.length === 0) {
      return res
        .status(201)
        .json({message: 'no se encontro ningun usuario'})
    }
    res.json(users)

  } catch(error) {
      return res
        .status(400)
        .json({message: error})
  }
})

router.post('/', async(req, res) => {
  const body = req.body
  try {
    const user = await userPhotographerSchema(body)
    await user.save()

    return res
      .status(201)
      .send({message: "userPhotographer creado correctamente"})

  } catch(error){

  }
})


module.exports = router
