import type { Metadata } from 'next';

import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { About } from '@/components/sections/about';
import { Compliance } from '@/components/sections/compliance';
import { Contact } from '@/components/sections/contact';
import { Hero } from '@/components/sections/hero';
import { Products } from '@/components/sections/products';
import { getSiteOrigin, site } from '@/lib/site';

const origin = getSiteOrigin();

export const metadata: Metadata = origin
  ? { alternates: { canonical: origin } }
  : {};

const websiteData = origin
  ? {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: site.name,
      url: origin.href,
      inLanguage: site.locale,
      publisher: {
        '@type': 'Organization',
        name: 'Luminous Lending Inc.',
      },
    }
  : undefined;

export default function Home() {
  return (
    <>
      {websiteData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteData).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Products />
        <About />
        <Compliance />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
