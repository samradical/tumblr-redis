const xhr = require('xhr-request')

var get = require('simple-get')

/*var opts = {
  url: 'http://rad.wtf/redis/',
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
    id:'dog',
    name:'velvet'
  }
}

function get() {
}

function get() {

}

function set() {

  xhr('https://rad.wtf/redis/hmset', {
      method: 'POST',
      json: true,
      body: DUMMY,
    }, function(err, data) {
      console.log(err);
      if (err) throw err
      console.log('got ArrayBuffer result: ', data)
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

set()
