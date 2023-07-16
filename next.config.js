/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    domains: ['user-images.githubusercontent.com','img.shields.io','github.com','github-production-user-asset-6210df.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
