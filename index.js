require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const route = require('./routes/routes')

const { redirect } = require('./controllers/links/redirect')

const app = express()
app.use(express.json({ extended: true }))
app.use(cors())
app.use('/api', route)
app.use('/:code', redirect)

const PORT = process.env.PORT || 5000
const CONNECTION_URL = process.env.DB_URL

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})
mongoose.connect(CONNECTION_URL, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

mongoose.set('useFindAndModify', false)
