var express = require('express');
var cors = require('cors');
var path = require('path');
var busboi = require('connect-busboy');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


const SERVER = function(router){

  var server;
  var app = express();

  app.use(bodyParser.json());

  app.use(cors());

  let _port = 6380
  var server = app.listen(_port)

  console.log(`App running on ${_port}`);

}

module.exports = SERVER;
