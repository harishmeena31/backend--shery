const express = require('express')
const app = express();

app.use(function(req, res, next){
    console.log("middleware working");
    next();  
 });

app.use(function(req, res, next){
    console.log("middleware 2 working");
    next();  
 });

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/profile', function (req, res) {
  res.send('Hello World from profile harish')
})

app.get('/profile/:username', function (req, res) {
  res.send(`Hello World ${req.params.username}`)
})

app.listen(3000)
