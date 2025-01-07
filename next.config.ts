import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: "export",
  images: {
    unoptimized: true,
  }
};
const withMDX = createMDX({})
 
export default withMDX(nextConfig)
