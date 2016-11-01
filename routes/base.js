const {SUCCESS, ERR} = require('./constants')

const BASE = function(router, redisApi, options ) {

  router.post(`/${options.host}del`, function(req, res) {
    api.del(req.query.key)
      .then(data => {
        res.send(Object.assign({}, SUCCESS))
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.post(`/${options.host}hmget`, function(req, res) {
    api.hmget(req.body.key)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.post(`/${options.host}hmset`, function(req, res) {
    let { value, key } = req.body
    api.hmset(key, value)
      .then(data => {
        res.send(Object.assign({}, SUCCESS))
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.post(`/${options.host}rpush`, function(req, res) {
    let { value, key } = req.body
    api.rpush(key, value)
      .then(data => {
        res.send(Object.assign({}, SUCCESS))
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  }

  router.post(`/${options.host}sadd`, function(req, res) {
    let { value, key } = req.body
    api.sadd(key, value)
      .then(data => {
        res.send(Object.assign({}, SUCCESS))
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  }

  router.post(`/${options.host}smembers`, function(req, res) {
    api.smembers(req.body.key)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.get('/', function(req, res) {
    res.status(200).send('nothing to see here...');
  });
}

module.exports = BASE
