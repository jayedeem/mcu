/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
   sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
   images: {
    domains: ["raw.githubusercontent.com","res.cloudinary.com"],
  },
};