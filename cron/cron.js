const tumblr = require('../tumblr/tumblr')
const redisApi = require('../redis_api')

const CRON = function(redisOptions, tumblrOptions) {

  const {
    project
  } = redisOptions

  const {
    account
  } = tumblrOptions


  const {
    _,
    posts
  } = tumblr

  const Posts = posts(tumblrOptions)

  const { parseRawTumblrData } = _

  /*
  oldData needs to match new data
  @ARRAY
  eg: raw.response.posts
  */
  function _setData(key, field, newData) {
    //promise
    console.log(`Setting hset ${key} under ${field}`);
    return redisApi.hget(key, field)
      .then(oldData => {
        if (oldData) {
          if (oldData[field]) {
            oldData = JSON.parse(oldData[field])
          } else {
            oldData = []
          }
        } else {
          oldData = []
        }
        let _str = JSON.stringify([...oldData, ...newData])
        return redisApi.hset(key, field, _str)
      })
  }


  function postCmd(type, query) {
    return Posts[type](query)
      .then(results => {
        let { posts } = parseRawTumblrData(results)
        let _key = `${project}:${account}:posts`
        return _setData(_key, type, posts)
      })
  }
  /*
  TODO
  need to wipe everything before a new batch
  */

  function _deletePosts() {
    let _key = `${project}:${account}:posts`
    console.log(`Deleting ${_key}`);
    return redisApi.del(_key)
  }

  function start(options) {
    return _deletePosts().then(() => {
      postCmd('text', options)
        .then(() => {
          postCmd('photo', options)
          postCmd('video', options)
        })
    })
  }

  return {
    start: start,
    posts: postCmd,
  }
}

module.exports = CRON;
