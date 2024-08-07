/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/tera-mebly" : "",
  output: "export",
  reactStrictMode: true,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
