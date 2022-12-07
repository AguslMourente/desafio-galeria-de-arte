/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      afterFiles: [
        {
          source: "/",
          destination: "/t/first",
        },
      ],
    };
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
