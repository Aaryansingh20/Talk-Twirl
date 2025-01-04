import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'], // Allow Unsplash domain for external images
  },
  reactStrictMode: true, // Recommended for better debugging
};

export default nextConfig;
