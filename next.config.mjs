/** @type {import('next').NextConfig} */


const nextConfig = {
  output: "export",
  basePath: "/tera-mebly",
  assetPrefix:"/tera-mebly",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
