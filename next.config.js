/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots.txt',
      },
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
