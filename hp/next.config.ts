import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      // URL変更時はここに301リダイレクトを追加する
    ];
  },
};

export default nextConfig;
