/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  productionBrowserSourceMaps: false,
  images: {
    formats: [ 'image/webp'],
    domains: ["books.google.com", ],
  },
}

module.exports = nextConfig
