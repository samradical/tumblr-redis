const xhr = require('xhr-request')
const Q = require('bluebird')
const R = Q.promisify(xhr);

const POSTS = function(options) {
  const {baseUrl, apiKey, account} = options
  const URL = `${baseUrl}${account}/posts/`

  function text(query = {}) {
    console.log(`${URL}text`);
    console.log(apiKey);
    return R(`${URL}text`, {
      method: 'GET',
      json: true,
      query: Object.assign({}, {
        api_key: apiKey,
        notes_info: true,
        limit: 20
      }, query)
    })
  }

  function photo(query = {}) {
    console.log(`${URL}photo`);
    console.log(apiKey);
    return R(`${URL}photo`, {
      method: 'GET',
      json: true,
      query: Object.assign({}, {
        api_key: apiKey,
        notes_info: true,
        limit: 20
      }, query)
    })
  }

  function video(query = {}) {
    console.log(`${URL}video`);
    console.log(apiKey);
    return R(`${URL}video`, {
      method: 'GET',
      json: true,
      query: Object.assign({}, {
        api_key: apiKey,
        notes_info: true,
        limit: 20
      }, query)
    })
  }

  return {
    text: text,
    video: video,
    photo: photo
  }
}

module.exports = POSTS