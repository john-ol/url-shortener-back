import { Link } from './../../models/Link.js'
export const deleteLink = async (req, res) => {
  try {
    await Link.findByIdAndRemove(req.params.id)
    res.json({ message: 'Link delete successfully!' })
  } catch (error) {
    console.log(error)
  }
}
