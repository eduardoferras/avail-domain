/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@use "@styles/main.scss" as *;`,
  },
};

export default nextConfig;
