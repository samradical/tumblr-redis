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

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(cors());

let _port = 6380
var server = app.listen(_port)


app.get('/del', function(req, res) {
  api.del(req.query.key)
    .then(data => {
      res.send(data)
    })
})

app.get('/hmget', function(req, res) {
  api.hmget(req.query.key)
    .then(data => {
      res.send(data)
    })
})

app.post('/hmset', function(req, res) {
  console.log(req.body);
  let {value} = req.body
  console.log(typeof value);
  console.log(value);
  api.hmset(req.body.key, value)
    .then(data => {
      res.send(data)
    })
    .catch(err=>{
      res.send({code:500,err:err})
    })
})

app.get('/', function(req, res) {
  res.status(200).send('nothing to see here...');
});

console.log(`App running on ${_port}`);

module.exports = app;
