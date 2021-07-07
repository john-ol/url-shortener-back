const { Schema, model } = require('mongoose')

const userSchema = Schema({
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
    type: Schema.Types.ObjectId,
    ref: 'Links',
  },
})

const User = model('Users', userSchema)
module.exports = User
