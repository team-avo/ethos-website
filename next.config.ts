import type { NextConfig } from "next";
import { legacyRedirects } from "./src/data/redirects";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Live WordPress URLs all end in a trailing slash (pages, /post/<slug>/,
  // archives, team). Match that so links and the 91 legacy redirects line up.
  trailingSlash: true,
  async redirects() {
    // 91 legacy redirects ported from the WordPress Redirection plugin.
    return legacyRedirects;
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
