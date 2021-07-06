import express from 'express'

import cors from 'cors'

const app = express()
app.use(express.json({ extended: true }))
app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})

app.get('/', function (req, res) {
  res.send('hello world')
})
