const express = require('express')
const app = express();

app.use()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile', function (req, res) {
  res.send('Hello World profile')
})

app.listen(3000)