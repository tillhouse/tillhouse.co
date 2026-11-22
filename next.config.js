/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async rewrites() {
    return [
      // Ship It! is a static Vite build copied into public/shipit/ by the
      // ship-it repo's `npm run publish:site`. Next serves public files by exact
      // path only, so map the bare route to its index.html.
      { source: "/shipit", destination: "/shipit/index.html" },
    ];
  },
};

module.exports = nextConfig;

