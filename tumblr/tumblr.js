const posts = require('./posts')

/*only want the response*/
const parseRawTumblrData = (raw) => {
  return raw.response
}

const API = {
  _: {
    parseRawTumblrData
  },
  posts: posts,
}

module.exports = API
