const BASE_OPTIONS = {
  host: ''
}

const SUCCESS = {
  code: 200
}
const ERR = {
  code: 500
}

/*needs to be valid json*/
const formSuccessResponse = (data) => (data || { code: 404 })


module.exports = {
  SUCCESS: SUCCESS,
  ERR: ERR,
  BASE_OPTIONS: BASE_OPTIONS,
  formSuccessResponse: formSuccessResponse
}
