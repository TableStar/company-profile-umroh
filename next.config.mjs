/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile:"./loader.js",
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
