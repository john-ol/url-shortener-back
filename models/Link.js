const { Schema, model } = require('mongoose')

const linkSchema = Schema({
  originLink: {
    type: String,
    required: true,
  },
  generatedLink: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  linkCode: {
    type: String,
    required: true,
    unique: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
  },
})

const Link = model('Links', linkSchema)
module.exports = Link
