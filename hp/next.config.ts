import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/providers",
        destination: "/providers/own-generation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
