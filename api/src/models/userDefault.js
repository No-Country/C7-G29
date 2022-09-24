const mongoose = require('mongoose');

const userDefaultSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  banned: {
    type: Boolean,
    default: false
  },
  followers: {
    type: Number
  },
  followed: {
    type: Number
  },
  favorites: {
    type: Number
  }
})

module.exports = mongoose.model('userDefault', userDefaultSchema)