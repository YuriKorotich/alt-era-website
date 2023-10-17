/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  env: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_USER_ID: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
