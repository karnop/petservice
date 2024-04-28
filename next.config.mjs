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
};

export default nextConfig;
