// next.config.ts
import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true", // run `ANALYZE=true next build`
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.pickmymaid.com",
        pathname: "/**",
      },
    ],
  },
};

// Wrap and export
export default withBundleAnalyzer(nextConfig);
