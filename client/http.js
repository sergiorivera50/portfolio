const axios = require('axios')

const BACKEND_PROTOCOL = process.env.BACKEND_PROTOCOL
const BACKEND_DOMAIN = process.env.BACKEND_DOMAIN
const BACKEND_PORT = process.env.BACKEND_PORT

const BACKEND_URL = `${BACKEND_PROTOCOL}://${BACKEND_DOMAIN}:${BACKEND_PORT}`
const API_ROUTE = process.env.API_ROUTE

module.exports = {
  BACKEND_PROTOCOL, BACKEND_DOMAIN, BACKEND_PORT,
  BACKEND_URL, API_ROUTE, 
  client: axios.create({
    baseURL: `${BACKEND_URL}${API_ROUTE}`,
    timeout: 20000,
    headers: {
      'Content-type': 'application/json'
    }
  })
}
