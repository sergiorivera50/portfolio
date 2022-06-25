import axios from 'axios'

export default axios.create({
  baseURL: process.env.API_URI,
  timeout: 10000,
  headers: {
    'Content-type': 'application/json'
  }
})
