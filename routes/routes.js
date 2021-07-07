const { Router } = require('express')
const { signUp } = require('./../controllers/auth/signUp')
const { signIn } = require('./../controllers/auth/signIn.js')
const { refreshToken } = require('./../controllers/auth/refreshToken')
const { generateLink } = require('../controllers/links/generateLink')
const { getLinks } = require('./../controllers/links/getLinks')
const { getLinkById } = require('./../controllers/links/getLinkById')
const {
  signUpMiddleware,
  signInMiddleware,
  verifyUserMiddleware,
} = require('./../middlewares/auth')
const { generate } = require('../middlewares/generate')
const { deleteLink } = require('../controllers/links/deleteLink')

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

module.exports = route
