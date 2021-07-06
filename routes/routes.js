import { Router } from 'express'
import { signUp } from './../controllers/auth/signUp.js'
import { signIn } from './../controllers/auth/signIn.js'
import { refreshToken } from './../controllers/auth/refreshToken.js'
import { generateLink } from '../controllers/links/generateLink.js'
import { getLinks } from './../controllers/links/getLinks.js'
import { getLinkById } from './../controllers/links/getLinkById.js'
import {
  signUpMiddleware,
  signInMiddleware,
  verifyUserMiddleware,
} from './../middlewares/auth.js'
import { generate } from '../middlewares/generate.js'
import { deleteLink } from '../controllers/links/deleteLink.js'
const route = new Router()

// ---authRoutes---
route.post('/auth/signup', signUpMiddleware(), signUp)
route.post('/auth/signin', signInMiddleware(), signIn)
route.get('/auth/refresh', verifyUserMiddleware, refreshToken)

// ---linkRoutes---
route.post('/links/generate', [generate(), verifyUserMiddleware], generateLink)
route.get('/links/', verifyUserMiddleware, getLinks)
route.get('/links/:id', verifyUserMiddleware, getLinkById)
route.delete('/links/delete/:id', deleteLink)

export default route
