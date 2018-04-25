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
        url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fi.amz.mshcdn.com%2FJ0Rb3T_X0TMMgqUldzTIdlliIlE%3D%2F950x534%2Fhttps%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F271660%2F4c300cabe1214e45bc188cc638b8081b.png&f=1',
        clickCount: 3,
        nickNames: [
          {name: 'Vamp'},
          {name: 'Veer'},
          {name: 'Vick'},
          {name: 'Viru'},
          {name: 'Vee'}
        ]
      },
      {
        name: 'TigerLilyImposter',
        url: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fi.amz.mshcdn.com%2Fzy65wibIKGJwrQ3LlrTIKPGfDoE%3D%2F1200x630%2F2017%252F11%252F12%252F85%252F0cb95ccbac6441e7a30fb7d1d01b094d.bc1ee.png&f=1',
        clickCount: 2,
        nickNames: [
          {name: 'Joe'},
          {name: 'Jordan'},
          {name: 'Janice'},
          {name: 'Jake'},
          {name: 'Jimmy'}
        ]
      },
    ]
  ))

})

app.listen(7000, () => console.log('Example app listening on port 7000!'))
