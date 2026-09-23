import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1680, 1920],
    qualities: [75, 84, 88],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pngkey.com",
        pathname: "/png/detail/**",
      },
      {
        protocol: "https",
        hostname: "spgs.nsuk.edu.ng",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
