import mongoose from 'mongoose'

const linkSchema = mongoose.Schema({
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
    type: mongoose.Types.ObjectId,
    ref: 'Users',
  },
})

export const Link = mongoose.model('Links', linkSchema)
