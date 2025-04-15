/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.PAGES_BASE_PATH || "",
  output: "export",
};

export default nextConfig;
