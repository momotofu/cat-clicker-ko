const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`))
})

app.get('/js/:path', (req, res) => {
  const filePath = decodeURI(req.params.path)
  res.sendFile(path.join(`${__dirname}${filePath}`))
})

app.get('/cats', (req, res) => {
  res.send(JSON.stringify(
    [
      {
        name: 'TigerLily',
        url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-ZHnphGtqBVI%2FTfryjXblbSI%2FAAAAAAAAEO4%2FXJb3DAuE94U%2Fs1600%2Fcat4.jpg&f=1',
        clickCount: 0,
        nickNames: [
          {name: 'TigerLily'},
          {name: 'Jessie'},
          {name: 'Juniper'},
          {name: 'Crisper'},
          {name: 'Krew'}
        ]
      },
      {
        name: 'TigerLilyClone',
        url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-ZHnphGtqBVI%2FTfryjXblbSI%2FAAAAAAAAEO4%2FXJb3DAuE94U%2Fs1600%2Fcat4.jpg&f=1',
        clickCount: 0,
        nickNames: [
          {name: 'TigerLily'},
          {name: 'Jessie'},
          {name: 'Juniper'},
          {name: 'Crisper'},
          {name: 'Krew'}
        ]
      },
      {
        name: 'TigerLilyImposter',
        url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-ZHnphGtqBVI%2FTfryjXblbSI%2FAAAAAAAAEO4%2FXJb3DAuE94U%2Fs1600%2Fcat4.jpg&f=1',
        clickCount: 0,
        nickNames: [
          {name: 'TigerLily'},
          {name: 'Jessie'},
          {name: 'Juniper'},
          {name: 'Crisper'},
          {name: 'Krew'}
        ]
      },
    ]
  ))

})

app.listen(7000, () => console.log('Example app listening on port 7000!'))
