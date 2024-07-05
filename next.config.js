const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
}
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /** @type {import('next').NextConfig} */
    return {
      ...nextConfig,
      async rewrites() {
        return {
          beforeFiles: [
            {
              source: "/foo/:id",
              destination: "/foo/:id",
            },
          ],
        };
      },
    };
  }

  return nextConfig;
};