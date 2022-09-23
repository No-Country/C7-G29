const mongoose = require('mongoose');

const userDefaultSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  lastName: {
    type: String,
    // required: true
  },
  email: {
    type: String,
    // required: true
  },
  password: {
    type: String,
    // required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  photographer: {
    type: Boolean
  },
  banned: {
    type: Boolean,
    default: false
  },
})

module.exports = mongoose.model('userDefault', userDefaultSchema)