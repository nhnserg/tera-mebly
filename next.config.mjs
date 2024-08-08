/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  assetPrefix: "/tera-mebly",
  images: {
    unoptimized: false,
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
