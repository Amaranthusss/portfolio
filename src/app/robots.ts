import type { MetadataRoute } from 'next';

import { Route } from '@/constants/Route';

const siteUrl: string = process.env.NEXT_PUBLIC_SITE_URL!;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [Route.AdminPanel]
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
