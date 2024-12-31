import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows all hosts
      },
    ],
  },
  distDir: ".next",
};

export default nextConfig;
