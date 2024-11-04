/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/rick-n-morty",
  images: {
    domains: ["rickandmortyapi.com"],
    unoptimized: true,
  }
};

export default nextConfig;
