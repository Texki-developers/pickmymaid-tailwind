// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
    optimizeServerReact: true,
    optimizeRouterScrolling: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.pickmymaid.com",
        pathname: "/**",
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/api/images/**',
      },
    ],
  },
};

// Wrap and export
export default nextConfig;
