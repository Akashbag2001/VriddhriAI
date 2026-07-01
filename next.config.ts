import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow external images if needed in future */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "stotraapparels.com" },
      { protocol: "https", hostname: "sansaptak.vercel.app" },
      { protocol: "https", hostname: "therhinomarketing.com" },
      { protocol: "https", hostname: "lensoflight.framer.website" },
      { protocol: "https", hostname: "lakeviewhomestay-in-177903.hostingersite.com" },
      { protocol: "https", hostname: "deys-investment.vercel.app" },
      { protocol: "https", hostname: "apex-summit-roofing.vercel.app" },
    ],
  },
};

export default nextConfig;
