const User = require('./../../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')

const signIn = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errorsArray: errors.array(),
      })
    }
    const { email, password } = req.body

    const existUser = await User.findOne({ email })

    if (!existUser) {
      return res.status(400).json({ message: "This user doesn't exists" })
    }
    const comparePassword = await bcrypt.compare(password, existUser.password)
    if (!comparePassword) {
      return res.status(400).json({ message: 'Invalid password, try again...' })
    }
    const token = jwt.sign(
      { userId: existUser.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    )
    res.json({
      userId: existUser.id,
      token,
      firstName: existUser.firstName,
      lastName: existUser.lastName,
      email: existUser.email,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong...' })
  }
}

module.exports = {
  signIn,
}
