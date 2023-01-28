/** @type {import('next').NextConfig} */
import withOptimizedImages from "next-optimized-images";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  withOptimizedImages: true,
};

export default nextConfig;
