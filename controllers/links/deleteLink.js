const Link = require('./../../models/Link')

const deleteLink = async (req, res) => {
  try {
    await Link.findByIdAndRemove(req.params.id)
    res.json({ message: 'Link delete successfully!' })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  deleteLink,
}
