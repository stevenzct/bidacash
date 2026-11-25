import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { getSiteOrigin, site } from '@/lib/site';
import './globals.css';

const inter = localFont({
  src: './fonts/inter-variable.woff2',
  variable: '--font-inter',
  weight: '400 720',
  display: 'swap',
});

const metadataBase = getSiteOrigin();
const socialImage = {
  url: '/images/bidacash-social.webp',
  width: 1200,
  height: 630,
  alt: 'BidaCash',
};

export const metadata: Metadata = {
  ...(metadataBase && { metadataBase }),
  title: site.title,
  description: site.description,
  icons: { icon: '/icons/bidacash.png' },
  openGraph: {
    type: 'website',
    locale: 'en_PH',
    siteName: site.name,
    title: site.title,
    description: site.description,
    ...(metadataBase && { url: metadataBase, images: [socialImage] }),
  },
  twitter: {
    card: metadataBase ? 'summary_large_image' : 'summary',
    title: site.title,
    description: site.description,
    ...(metadataBase && { images: [socialImage] }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.locale} id="top" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
