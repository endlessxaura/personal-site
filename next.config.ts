import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    loadPaths: [
        "./node_modules",
        "./node_modules/bootstrap/scss"
    ],
    quietDeps: true
  },
};

export default nextConfig;