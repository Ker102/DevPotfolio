/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 100],
  },
  compress: true,
  reactStrictMode: false,
};

module.exports = nextConfig;



