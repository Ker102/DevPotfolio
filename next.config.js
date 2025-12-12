/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  reactStrictMode: false,
  eslint: {
    dirs: ['app', 'components', 'lib', 'hooks', 'data'],
  },
};

module.exports = nextConfig;



