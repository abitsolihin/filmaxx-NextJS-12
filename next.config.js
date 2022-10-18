/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['filmaxxapi.herokuapp.com'],
  },
};
const withVideos = require('next-videos');
module.exports = withVideos();


module.exports = nextConfig
