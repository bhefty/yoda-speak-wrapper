const express = require('express')
const app = express()

app.get('/api/:text', (req, res) => {
  let text = req.params.text

  let result = {
    translation: text.toUpperCase()
  }

  res.send(result)
})

app.listen(process.env.PORT || 8080, () => {
  console.log('Server is listening.')
})
