const mongoose = require('mongoose')

const publicationSchema = mongoose.Schema({
    title: {
      type: String,
    },
    ubication: {
      type: String,
    },
    tags: {
      type: String,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
      require: true
    },
    likes: {
      type: mongoose.Types.ObjectId
    },
    downloads: {
      type: Number
    },
    price: {
      type: Number
    },
    pay: {
      type: Boolean
    },
    photographer: {
      type: mongoose.Types.ObjectId,
      ref: 'user'
    },
    challenge: [{
      type: mongoose.Types.ObjectId,
      ref:'challenges'
    }],
}, {timestamps: true, versionKey: false})

module.exports = mongoose.model('publication', publicationSchema)