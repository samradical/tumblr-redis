var express = require('express');
var cors = require('cors');
var path = require('path');
var busboi = require('connect-busboy');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const api = require('./redis_api')
const routes = require('./routes/index')
const {BASE_OPTIONS} = require('./routes/constants')

const SERVER = function(options) {

  var server;
  var app = express();

  app.use(bodyParser.urlencoded({ extended: false }))

  app.use(bodyParser.json());

  app.use(cors());

  options = Object.assign({}, BASE_OPTIONS, options)

  let router = express.Router()

  Object.keys(routes).forEach(key => {

    routes[key](router, api, options)

  })

  app.use('/', router)

  let _port = 6380
  var server = app.listen(_port)

  console.log(`App running on ${_port}`);

}

module.exports = SERVER;
