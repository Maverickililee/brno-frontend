/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brnoweb.com", // Replace with your CDN or trusted domain
      },
      {
        protocol: "https",
        hostname: "brno-backend.onrender.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  eslint: {
    ignoreDuringBuilds: true, // avoid build fails on minor lint issues
  },

  typescript: {
    ignoreBuildErrors: true, // prevents deployment blocking from type errors (optional)
  },

  poweredByHeader: false, // hides "x-powered-by" header for security
};

export default nextConfig;
