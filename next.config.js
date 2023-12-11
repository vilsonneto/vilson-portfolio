/** @type {import('next').NextConfig} */
const nextConfig = {
  hsts: {
    maxAge: 31536000,
    includeSubdomains: true,
  },
  http2: true,
  reactStrictMode: true,
  images: {
    optimizeImages: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
