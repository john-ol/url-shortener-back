import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import mongoose from 'mongoose'
import route from './routes/routes.js'
import { redirect } from './controllers/links/redirect.js'

dotenv.config()
const app = express()
app.use(express.json({ extended: true }))
app.use(cors())
// app.use('/api', route)
// app.use('/:code', redirect)

const PORT = process.env.PORT || 5000
const CONNECTION_URL = process.env.DB_URL

// mongoose
//   .connect(CONNECTION_URL, {
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// mongoose.set('useFindAndModify', false)

app.get('/', function (req, res) {
  res.send('hello world')
})
