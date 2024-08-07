/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
