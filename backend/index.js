const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send(`<h1>Hello World! from BlogApp</h1>`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})