/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://filmaxx-server.vercel.app/'],
  },
  env: { NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL },
};


const withVideos = require('next-videos');
module.exports = withVideos();

module.exports = nextConfig;
