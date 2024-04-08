/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    devIndicators: {
        buildActivityPosition: 'bottom-right',
    },
    env: {
        API_URL: "http://localhost:8000/api/",
    }
};

export default nextConfig;
