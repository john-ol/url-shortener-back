const Link = require('./../../models/Link')
const shortId = require('shortid')
const { validationResult } = require('express-validator')

const generateLink = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors)
    }
    const { originLink } = req.body

    const existingLink = await Link.findOne({
      originLink,
      owner: req.user.userId,
    })

    if (existingLink) {
      return res.json({ link: existingLink, message: 'Link created' })
    }
    const baseUrl = process.env.BASE_URL
    const linkCode = shortId.generate()
    const generatedLink = `${baseUrl}/${linkCode}`
    const newLink = new Link({
      originLink,
      generatedLink,
      linkCode,
      owner: req.user.userId,
    })
    await newLink.save()
    res.status(201).json({ link: newLink, message: 'Link created' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong...' })
  }
}

module.exports = {
  generateLink,
}
