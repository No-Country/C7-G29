const mongoose = require('mongoose');

const userPhotographerSchema = mongoose.Schema({
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
  followers: {
    type: mongoose.Types.ObjectId
  },
  followed: {
    type: mongoose.Types.ObjectId
  },
  favorites: {
    type: mongoose.Types.ObjectId
  },
  liked: {
    type: mongoose.Types.ObjectId
  },
  publications: {
    type: mongoose.Types.ObjectId
  },
  verified: {
    type: Boolean
  },
  admin: {
    type: Boolean,
    default: false
  },
  banned: {
    type: Boolean,
    default: false
  },
}, {timestamps: true, versionKey: false})

module.exports = mongoose.model('userPhotographer', userPhotographerSchema)
