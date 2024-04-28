/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // PROJECT_URL: "http://localhost:3000/",
        PROJECT_URL: "https://petserviceco.vercel.app/",
    },

    images: {
        domains: ["lh3.googleusercontent.com"],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
