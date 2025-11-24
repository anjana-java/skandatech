/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' ? '/skandatech' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/skandatech' : '',
}

export default nextConfig
