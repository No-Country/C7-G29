const mongoose = require('mongoose');

const userDefaultSchema = mongoose.Schema({
  image: {
    type: String
  },
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
  followers: [{
    type: mongoose.Types.ObjectId
  }],
  followed: [{
    type: mongoose.Types.ObjectId
  }],
  favorites: [{
    type: mongoose.Types.ObjectId
  }],
  liked: [{
    type: mongoose.Types.ObjectId
  }],
  admin: {
    type: Boolean,
    default: false
  },
  banned: {
    type: Boolean,
    default: false
  },
}, {timestamps: true, versionKey: false})

userDefaultSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.password
  }
})

module.exports = mongoose.model('userDefault', userDefaultSchema)