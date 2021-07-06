import bcrypt from 'bcryptjs'
import { validationResult } from 'express-validator'
import { User } from './../../models/User.js'

export const signUp = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errorsArray: errors.array(),
      })
    }
    const { firstName, lastName, email, password, confirmPassword } = req.body
    const existUser = await User.findOne({ email })

    if (existUser) {
      return res.status(400).json({
        message: 'User with this e-mail already exists',
      })
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords doesn't match" })
    }
    const hashedPassword = await bcrypt.hash(password, 12)
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    })
    await newUser.save()
    res
      .status(201)
      .json({ message: 'User created successfully, you can login' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong...' })
  }
}
