/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds:true,
    },
    images: {
        domains: ['techbox.developimpact.net'], // Add the domain here
      },
}

module.exports = nextConfig
