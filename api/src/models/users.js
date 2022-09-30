const mongoose = require('mongoose');

const user = mongoose.Schema({
  image: {
    type: String
  },
  avatar: {
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
  publications: [{
    type: mongoose.Types.ObjectId,
    ref: 'publication'
  }],
  userType:{
    type: String,
    default: 'userDefault',
    required: true,
  },
  admin: {
    type: Boolean,
    default: false
  },
  banned: {
    type: Boolean,
    default: false
  },
  verified: {
    type: Boolean
  },
}, {timestamps: true, versionKey: false})

user.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.password
  }
})

module.exports = mongoose.model('user', user)