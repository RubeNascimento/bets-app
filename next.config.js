/** @type {import('next').NextConfig} */
require('dotenv').config()
const nextConfig = {
    env: {
        apiKey: process.env.myApiKey,
      },
}

module.exports = nextConfig
