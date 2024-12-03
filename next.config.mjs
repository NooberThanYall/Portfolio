/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['pbs.twimg.com', 'assets.aceternity.com', 'images.unsplash.com','zeba.academy']
    },
    eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
