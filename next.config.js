/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  rewrites: async () => [
    {
      source: '/foo/:id',
      destination: '/foo/:id',
    },
  ],
}

module.exports = nextConfig
