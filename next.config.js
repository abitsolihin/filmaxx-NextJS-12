/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['filmaxxapi.herokuapp.com'],
  },
  env: { NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL },
};

module.exports = {
  siteUrl: 'https://filmaxx.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
};

const withVideos = require('next-videos');
module.exports = withVideos();

module.exports = nextConfig;
