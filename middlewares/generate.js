import { check } from 'express-validator'
export const generate = () => {
  return check('originLink', 'Invalid link').isURL()
}
