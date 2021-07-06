import { Link } from './../../models/Link.js'
export const getLinks = async (req, res) => {
  try {
    const links = await Link.find({ owner: req.user.userId })
    res.json(links)
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong...' })
  }
}
