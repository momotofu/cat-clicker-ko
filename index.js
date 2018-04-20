const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`))
})

app.get('/js/:path*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/js/${req.params.path}`))
})
app.listen(7000, () => console.log('Example app listening on port 7000!'))
