/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "/",
  },
  basePath: "/Mit-weds-Poonam", // Add this line to set the base path
};

module.exports = {
  ...nextConfig,
};
