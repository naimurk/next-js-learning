/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['nextjs.org'],
        // unlimited external images 
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
            // port: '',
            // pathname: '/account123/**',
          },
        ],
      },
};

module.exports =  nextConfig;
