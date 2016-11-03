const fs = require('fs')

const cron = require('../cron/cron')
const Cron = cron({ project: 'tumblr' }, {
  baseUrl: 'https://api.tumblr.com/v2/blog/',
  account: 'a3dddog',
  apiKey: '0MHlvEyHyjzwfVA06TVRbExwsgj3yVLdQ97uIlMhWM8FZPr5zT'
})
Cron.start()

