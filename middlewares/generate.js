const { check } = require('express-validator')

const generate = () => {
  return check('originLink', 'Invalid link').isURL()
}

module.exports = {
  generate,
}
