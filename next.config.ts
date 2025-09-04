/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",        // must match your repo name for GH Pages project sites
  output: "export",              // writes static site to ./out
  images: { unoptimized: true }, // required if you use next/image with static export
  trailingSlash: true,           // avoids 404s on GH Pages for nested routes
  reactStrictMode: true,
};

module.exports = nextConfig;
