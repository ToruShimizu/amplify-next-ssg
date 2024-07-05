const { PHASE_DEVELOPMENT_SERVER,PHASE_EXPORT } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
}
module.exports = (phase) => {
  if (phase === PHASE_EXPORT) {
    /** @type {import('next').NextConfig} */
    return {
      ...nextConfig,
      async rewrites() {
        return {
          beforeFiles: [
            {
              source: "/foo/:id",
              destination: "/foo/:id/index.html",
            },
          ],
        };
      },
    };
  }

  return nextConfig;
};