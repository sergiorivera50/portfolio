const { BACKEND_DOMAIN } = require('./http')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ BACKEND_DOMAIN ]
  }
}

module.exports = nextConfig
