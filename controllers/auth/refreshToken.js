const User = require('./../../models/User')
const jwt = require('jsonwebtoken')

const refreshToken = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId })
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
    })
    res.json({
      userId: user.id,
      token,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' })
  }
}

module.exports = {
  refreshToken,
}
