import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'], // 👈 Add allowed image domains here
  },
};

export default nextConfig;
