const express = require('express')
const userDefaultSchema = require('../models/userDefault')

const router = express.Router()


router.get('/', (req, res) => {
  userDefaultSchema.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})

router.post('/', (req, res) => {
  const user = userDefaultSchema(req.body)
  user.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
})


module.exports = router