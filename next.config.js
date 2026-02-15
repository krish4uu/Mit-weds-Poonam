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
};

module.exports = {
  ...nextConfig,
  output: 'export',
};
