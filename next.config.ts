// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  reactStrictMode: true,
  images: {
    unoptimized: true, // required if you want static export with <Image>
  },
};

module.exports = nextConfig;
