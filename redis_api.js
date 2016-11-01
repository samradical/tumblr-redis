const {youtube} = require('@samelie/chewb-redis');

/*redis client*/
const REDIS = (() => {
  return new youtube({
    host:process.env.REDIS_HOST || '127.0.0.1',
    port:process.env.REDIS_PORT || '6379', //redis port
  })
})()

module.exports = REDIS