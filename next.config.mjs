/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/rick-n-morty",
  assetPrefix: "/rick-n-morty/",
  images: {
    domains: ["rickandmortyapi.com"],
    unoptimized: true,
  }
};

export default nextConfig;
