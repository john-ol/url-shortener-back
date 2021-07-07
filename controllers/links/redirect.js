const Link = require('./../../models/Link')

const redirect = async (req, res) => {
  try {
    const link = await Link.findOne({ linkCode: req.params.code })
    if (link) {
      link.clicks++
      await link.save()
      res.redirect(link.originLink)
    }
    res.status(404).json({ message: 'Invalid link' })
  } catch (error) {}
}

module.exports = {
  redirect,
}
