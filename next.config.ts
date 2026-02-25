import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "nginx",
        pathname: "/images/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/images/**",
      },
    ],
    dangerouslyAllowLocalIP:
      process.env.NEXT_IMAGES_DANGEROUSLY_ALLOW_LOCAL_IP === "true",
  },
};

export default nextConfig;