/**
 * @type {import('next').NextConfig}
 */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lolduo-static-img.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
