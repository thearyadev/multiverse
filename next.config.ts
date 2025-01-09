import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    dirs: ["app", "components/app"],
  },
};
const withMDX = createMDX({});

export default withMDX(nextConfig);
