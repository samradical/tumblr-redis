var express = require('express');
var cors = require('cors');
var path = require('path');
var busboi = require('connect-busboy');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const api = require('./api')

var server;
var app = express();

app.use(bodyParser.json());

app.use(cors());

let _port = 6380
var server = app.listen(_port)

const SUCCESS = {
  code:200
}
const ERR = {
  code:500
}


app.post('/del', function(req, res) {
  api.del(req.query.key)
    .then(data => {
      res.send(Object.assign({}, SUCCESS))
    })
    .catch(err => {
      res.send(Object.assign({},{err:err}, ERR))
    })
})

app.post('/hmget', function(req, res) {
  api.hmget(req.body.key)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(Object.assign({},{err:err}, ERR))
    })
})

app.post('/hmset', function(req, res) {
  let { value ,key} = req.body
  api.hmset(key, value)
    .then(data => {
      res.send(Object.assign({}, SUCCESS))
    })
    .catch(err => {
      res.send(Object.assign({},{err:err}, ERR))
    })
})

app.get('/', function(req, res) {
  res.status(200).send('nothing to see here...');
});

console.log(`App running on ${_port}`);

module.exports = app;
