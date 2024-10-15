/** @type {import('next').NextConfig} */
const devImageRemotePattern = process.env.NODE_ENV === "development" ? [
    {
      protocol: "https",
      hostname: "dkstatics-public.digikala.com",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "dkms.digikala.com",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "www.digikala.com",
      pathname: "/**",
    },
    {
      protocol: "https",
      hostname: "images.interactify.live",
      pathname: "/**",
    },
  ] : []

const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "test",
  images: {
    formats: ["image/webp"],
    remotePatterns: [
        
    ].concat(devImageRemotePattern)
  }
}

export default nextConfig
