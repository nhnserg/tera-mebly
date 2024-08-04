/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
