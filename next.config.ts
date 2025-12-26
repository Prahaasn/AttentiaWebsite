import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // For GitHub Pages - update this if your repo name is different
  basePath: process.env.NODE_ENV === "production" ? "/AttentiaWebsite" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/AttentiaWebsite" : "",
};

export default nextConfig;
