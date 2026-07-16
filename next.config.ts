import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  allowedDevOrigins: ['192.168.1.7']
};

export default nextConfig;
