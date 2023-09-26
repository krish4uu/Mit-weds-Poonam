/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "Mit-weds-Poonam/",
  },
};

module.exports = nextConfig;
