const fs = require('fs')

let _data = JSON.parse(fs.readFileSync('./post_dummy.json'))
console.log(_data.response.posts.length);

const cron = require('../cron/cron')
const Cron = cron({ project: 'tumblr' }, {
  baseUrl: 'https://api.tumblr.com/v2/blog/',
  account: 'a3dddog',
  apiKey: '0MHlvEyHyjzwfVA06TVRbExwsgj3yVLdQ97uIlMhWM8FZPr5zT'
})
Cron.start()



return
const xhr = require('xhr-request')
const Q = require('bluebird')
const R = Q.promisify(xhr);

//const HOST = "https://rad.wtf/redis/"
const HOST = "http://127.0.0.1:6380/redis/"


/*var opts = {
  url: 'http://rad.wtf/',
  body: JSON.stringify({key:'test', value:'this is the POST body'})
}
get.post(opts, function (err, res) {
  if (err) throw err
  res.pipe(process.stdout) // `res` is a stream
})

return*/

const DUMMY = {
  key: 'dog',
  value: {
    id: 'dog',
    name: 'velvet'
  }
}

function del() {
  return R(`${HOST}del`, {
    method: 'POST',
    json: true,
    query: {
      key: 'dog'
    },
  }, function(err, data) {
    console.log(err);
    if (err) throw err
    console.log('got ArrayBuffer result: ', data)
  })
}

function get() {
  let _h = `${HOST}hmget`
  console.log(_h);
  return R(_h, {
    method: 'POST',
    json: true,
    body: {
      key: DUMMY.key
    }
  })
}

function set() {

  return R(`${HOST}hmset`, {
      method: 'POST',
      json: true,
      body: DUMMY,
    })
    /*
      xhr('http://localhost:6379/hmset', {
        method: 'PUT',
        json: true,
        body: {
          key: 'test_project:test:id',
          value: DUMMY
        },
      }, function(err, data) {
        if (err) throw err

        console.log(data);
      })*/
}

get()
  .then((d) => {
    console.log(d);
    console.log("Got");
    set()
      .then(() => {
        console.log("SET");
      })
  })
