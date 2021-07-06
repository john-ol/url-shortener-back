import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  links: {
    type: mongoose.Types.ObjectId,
    ref: 'Links',
  },
})

export const User = mongoose.model('Users', userSchema)
