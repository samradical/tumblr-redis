const { SUCCESS, ERR, formSuccessResponse } = require('./constants')

const BASE = function(router, redisApi, options) {

  router.post(`/${options.host}del`, function(req, res) {
    redisApi.del(req.body.key)
      .then(data => {
        res.send(Object.assign({}, SUCCESS))
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.post(`/${options.host}hget`, function(req, res) {
    let { key } = req.body
    console.log("hget", key);
    redisApi.hget(req.body.key)
      .then(data => {
        console.log("hget sucess", key);
        //needs to be valid json
        res.send(formSuccessResponse(data))
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.post(`/${options.host}hmget`, function(req, res) {
    let { key } = req.body
    console.log("hmget", key);
    redisApi.hmget(req.body.key)
      .then(data => {
        console.log("hmget sucess", key);
        console.log(data);
        //needs to be valid json
        res.send(formSuccessResponse(data))
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.post(`/${options.host}hmset`, function(req, res) {
    let { value, key } = req.body
    console.log('hmset', key);
    if (!value) {
      res.send(Object.assign({}, ERR))
    } else {
      redisApi.hmset(key, value)
        .then(data => {
          console.log('hmset success', key);
          res.send(Object.assign({}, SUCCESS))
        })
        .catch(err => {
          res.send(Object.assign({}, { err: err }, ERR))
        })
    }
  })

  router.post(`/${options.host}rpush`, function(req, res) {
    let { value, key } = req.body
    if (!value) {
      res.send(Object.assign({}, ERR))
    } else {
      redisApi.rpush(key, value)
        .then(data => {
          res.send(Object.assign({}, SUCCESS))
        })
        .catch(err => {
          res.send(Object.assign({}, { err: err }, ERR))
        })
    }
  })

  router.post(`/${options.host}sadd`, function(req, res) {
    let { value, key } = req.body
    console.log('sadd', key);
    if (!value) {
      res.send(Object.assign({}, ERR))
    } else {
      redisApi.sadd(key, value)
        .then(data => {
          console.log('sadd success', key);
          res.send(Object.assign({}, SUCCESS))
        })
        .catch(err => {
          res.send(Object.assign({}, { err: err }, ERR))
        })
    }
  })

  router.post(`/${options.host}smembers`, function(req, res) {
    let { key } = req.body
    console.log(key);
    redisApi.smembers(key)
      .then(data => {
        //needs to be valid json
        res.send(formSuccessResponse(data))
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
