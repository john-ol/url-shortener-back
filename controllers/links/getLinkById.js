import { Link } from './../../models/Link.js'
export const getLinkById = async (req, res) => {
  try {
    if (req.params.id.length !== 24) {
      return res.status(404).json({ message: 'Invalid link ID' })
    }
    const { userId } = req.user
    const existingLink = await Link.findById(req.params.id)
    if (!existingLink) {
      return res.status(404).json({ message: 'There is no such link' })
    }
    if (existingLink?.owner != userId) {
      return res
        .status(404)
        .json({ message: 'This link does not belong to you' })
    }

    res.json({ link: existingLink })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong...' })
  }
}
