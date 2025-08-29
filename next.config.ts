import type { NextConfig } from "next";

const nextConfig = {
    basePath: "/portfolio",

  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;

export default nextConfig;
