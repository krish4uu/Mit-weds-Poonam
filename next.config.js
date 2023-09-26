/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    reactStrictMode: true,
    images: {
      loader: "akamai",
      path: "/",
    },
};

module.exports = nextConfig;
