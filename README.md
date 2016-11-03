#Tumblr-Redis

<hr>
Use tumblr as a CMS.

Fetch post data to store in Redis

<hr>

Building of of [rad-redis](https://github.com/samradical/rad-redis)

- Run a server
- Merge routes into existing server

##Bonus

Run a **cron** job to hit tumblr to do all the saving.

The API:

`cron/crons.js`

The example:

`example/cron_example.js`

```

const fs = require('fs')

const cron = require('../cron/cron')
const Cron = cron(
//redisOptions
{ project: 'tumblr' }
,
//tumblrOptions
 {
  baseUrl: 'https://api.tumblr.com/v2/blog/',
  account: 'a3dddog',
  apiKey: '<get yours :)>'
})
Cron.start()
```

Data is saved with the `HSET` command where the `key` is formed like:

```
`${project}:${account}:posts`
```

and the `field` is the _post type_ (text, photo, video) ,Tumblr's types

<hr>

Create a client with [chewb-redis](https://github.com/samradical/chewb-redis) or a server-client with this repo:

```
node bin/api_server.js

```
^^^Starts a `server.js`


Retreive data by:

```
const xhr = require('xhr-request')
const Q = require('bluebird')
const R = Q.promisify(xhr);

function get() {
  return R("http://127.0.0.1:6380/hget", {
    method: 'POST',
    json: true,
    body: {
      key: 'tumblr:a3dddog:posts'
    }
  })
}
//returns
{
text:[],
photo:[],
video:[]
}
```

###Ideas of organisation

[tumblr-redis-parser](https://github.com/samradical/tumblr-redis-parser)

![](https://66.media.tumblr.com/b34813a9872b47f710e6f05a5848f1ef/tumblr_og33hxGTfD1vk3llio1_1280.png)

Use of tags as ways of organisaing a front end structure.

Using this on [ADd.dog](http://add.dog)