/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/posts/:id',
        destination: 'https://www.google.com/',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
