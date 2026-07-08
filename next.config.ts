import createNextIntlPlugin from 'next-intl/plugin';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
        pathname: '/images/**'
      },
      {
        protocol: 'http',
        hostname: 'nginx',
        pathname: '/images/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/images/**'
      }
    ],
    dangerouslyAllowLocalIP:
      process.env.NEXT_IMAGES_DANGEROUSLY_ALLOW_LOCAL_IP === 'true'
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
