/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
      prependData: `@import "@/styles/main";`,
      }
};

export default nextConfig;
