/** @type {import('next').NextConfig} */
module.exports = {
  typescript:{
    ignoreBuildErrors:true,
  },
  reactStrictMode: true,
  images: {
    domains: ['www.pngkey.com', 'img.freepik.com', 'lh3.googleusercontent.com']
  }
}
