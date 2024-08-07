/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/tera-mebly" : "",
  assetPrefix:"/tera-mebly",
  reactStrictMode: true,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
