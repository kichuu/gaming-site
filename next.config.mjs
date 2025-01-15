/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'localhost'], // Add 'localhost' for local development
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // Common breakpoints for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Specific sizes for static images
  },
};

export default nextConfig;
