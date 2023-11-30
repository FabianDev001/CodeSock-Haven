/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
          hostname: 'localhost',
        },{
          hostname: 'socks-haven.fab-js.de'
        }],
      }
}

module.exports = nextConfig
