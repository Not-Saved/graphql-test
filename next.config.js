/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpackDevMiddleware: (config) => {
		return config;
	},
};

module.exports = nextConfig;
