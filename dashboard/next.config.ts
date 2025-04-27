import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: "1mb", // Example value, adjust as needed
            allowedOrigins: ["http://localhost:9000"] // Example value, adjust as needed
        }
    },

    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "9000",
                pathname: "/ecofresh/**"
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                pathname: "**"
            },
            // Add your production domain if needed
            {
                protocol: "https",
                hostname:
                    "my-image-storage-bucket-1234.s3.us-east-1.amazonaws.com",
                pathname: "**"
            }
        ]
    }
};

export default nextConfig;
