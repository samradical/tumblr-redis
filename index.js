var express = require('express');

const Server = require('./server')
//redis
const api = require('./redis_api')
//express routes
const routes = require('./routes/index')
const {BASE_OPTIONS} = require('./routes/constants')
const API = (() => {

  /*
  start a new express sever
  */
  function server(options) {
    Server(routes(null, options))
  }

  /*
  merge the routes
  */
  function routes(router, options = {}) {

    options = Object.assign({}, BASE_OPTIONS, options)

    router = router || express.Router()

    Object.keys(routes).forEach(key => {

      routes[key](router, api, options)

    })
  }

  return {
    server: server,
    routes: routes
  }

})()


module.exports = API