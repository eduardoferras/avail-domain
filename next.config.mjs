/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		prependData: `@import "@/styles/main";`,
	},
	output: 'standalone',
}

export default nextConfig
