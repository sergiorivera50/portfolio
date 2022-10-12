/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ process.env.BACKEND_DOMAIN ]
  },
  env: {
    BACKEND_PROTOCOL: process.env.BACKEND_PROTOCOL, 
    BACKEND_DOMAIN: process.env.BACKEND_DOMAIN, 
    BACKEND_PORT: process.env.BACKEND_PORT,
    API_ROUTE: process.env.API_ROUTE,
    CV_URL: process.env.CV_URL
  }
}

module.exports = nextConfig
