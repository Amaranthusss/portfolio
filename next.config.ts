import { withPayload } from '@payloadcms/next/withPayload';
import createNextIntlPlugin from 'next-intl/plugin';

import type { NextConfig } from 'next';

const blobStoreId: string =
  process.env.BLOB_STORE_ID == null
    ? '*'
    : process.env.BLOB_STORE_ID.replace('store_', '').toLowerCase();

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: blobStoreId + '.public.blob.vercel-storage.com',
      },
      // {
      //   protocol: 'http',
      //   hostname: 'nginx',
      //   pathname: '/images/**',
      // },
      // {
      //   protocol: 'http',
      //   hostname: 'localhost',
      //   pathname: '/images/**',
      // },
    ],
    dangerouslyAllowLocalIP:
      process.env.NEXT_IMAGES_DANGEROUSLY_ALLOW_LOCAL_IP === 'true',
  },
};

const withNextIntl = createNextIntlPlugin();

export default withPayload(withNextIntl(nextConfig));
