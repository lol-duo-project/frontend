/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'production',
  },
  resolve: {
    fallback: {
      util: require.resolve("util/")
    }
  }
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     issuer: /\.[jt]sx?$/,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
};

module.exports = nextConfig;
