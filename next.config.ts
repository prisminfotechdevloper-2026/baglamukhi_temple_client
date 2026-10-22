import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/pandit-deepak-sharma",
        destination: "/pandit-ji",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/pandit-ji",
        permanent: true,
      },
      {
        source: "/gemstones",
        destination: "/ratna",
        permanent: true,
      },
      {
        source: "/pujas",
        destination: "/puja",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
