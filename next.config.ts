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
    ];
  },
};

export default nextConfig;
