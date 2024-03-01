/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/TBBJason/Blogposts/main/images/**',
      },
    ],
  },
}

module.exports = nextConfig
