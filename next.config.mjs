/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set basePath if deploying to a subdirectory (e.g., '/repo-name')
  // basePath: '',
  trailingSlash: true,
};

export default nextConfig;
