'use strict'

const express = require('express')
require('dotenv').config()
require('es6-promise').polyfill()
require('isomorphic-fetch')
const app = express()

const API_KEY = process.env.X_MASHAPE_KEY

const getTranslation = (text) => {
  const url = `https://yoda.p.mashape.com/yoda?sentence=${encodeURIComponent(text)}`
  const options = {
    headers: {
      'X-Mashape-Key': API_KEY,
      'Accept': 'text/plain'
    }
  }

  return fetch(url, options)
    .then(response => response.text())
}

app.get('/api/:text', (req, res) => {
  let text = req.params.text
  getTranslation(text)
    .then(response => response.trim())
    .then(translation => {
      let result = { translation }
      console.log(result)
      res.send(result)
    })
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is listening.')
})
