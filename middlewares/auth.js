const { check } = require('express-validator')
const jwt = require('jsonwebtoken')

const signUpMiddleware = () => {
  return [
    check('email', 'Invalid e-mail').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
  ]
}

const signInMiddleware = () => {
  return [
    check('email', 'Invalid e-mail').isEmail(),
    check('password', 'Please, enter password').exists(),
  ]
}
const verifyUserMiddleware = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return res.status(401).json({ message: 'Please login again...' })
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = decoded
    next()
  } catch (error) {}
}

module.exports = {
  signUpMiddleware,
  signInMiddleware,
  verifyUserMiddleware,
}
