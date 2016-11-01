const {SUCCESS, ERR} = require('./constants')

const YOUTUBE = function(router, redisApi, options) {

  router.post(`/${options.host}youtube/get-sidx`, function(req, res) {
    let { key } = req.body
    redisApi.getSidx(key)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.post(`/${options.host}youtube/set-sidx`, function(req, res) {
    let { key, value } = req.body
    redisApi.setSidx(key, value)
      .then(data => {
        res.send(Object.assign({}, SUCCESS))
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.post(`/${options.host}youtube/set-youtube-playlist-items`, function(req, res) {
    let { key, value } = req.body
    redisApi.setYoutubePlaylistItems(key, value)
      .then(data => {
        res.send(Object.assign({}, SUCCESS))
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })


  router.post(`/${options.host}youtube/get-youtube-playlist-items`, function(req, res) {
    let { key } = req.body
    redisApi.getPlaylistItems(key)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.post(`/${options.host}youtube/set-uploaded-video-playlist`, function(req, res) {
    let { key, value } = req.body
    redisApi.setUploadedVideoPlaylist(key, value)
      .then(data => {
        res.send(Object.assign({}, SUCCESS))
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })
  })

  router.post(`/${options.host}youtube/get-uploaded-playlist-items`, function(req, res) {
    let { key } = req.body
    redisApi.getUploadedVideoPlaylistItems(key)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })

  })

  router.post(`/${options.host}youtube/get-uploaded-playlist-report`, function(req, res) {
    let { key } = req.body
    redisApi.getUploadedVideoPlaylistReport(key)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.send(Object.assign({}, { err: err }, ERR))
      })

  })
}
module.exports = YOUTUBE
