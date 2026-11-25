import type { MetadataRoute } from 'next';

import { getSiteOrigin } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();

  return origin ? [{ url: origin.href }] : [];
}
