/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/src/app/robots.txt',
      },
      {
        source: '/sitemap.xml',
        destination: '/src/app/sitemap.xml',
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
