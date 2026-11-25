import Image from 'next/image';
import { Headset } from 'lucide-react';

import { NavigationHeight } from '@/components/layout/navigation-height';

const navigation = [
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#compliance', label: 'Compliance' },
];

export function SiteHeader() {
  return (
    <header
      id="site-header"
      className="sticky top-0 z-20 bg-white text-brand-navy"
    >
      <div className="wrap flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between md:gap-5 md:py-[17px]">
        <a
          href="#top"
          className="inline-flex min-h-11 w-fit items-center"
          aria-label="BidaCash home"
        >
          <Image
            src="/images/bidacash-wordmark.svg"
            width={1470}
            height={410}
            alt="BidaCash"
            loading="eager"
            fetchPriority="low"
            className="h-auto w-[142px]"
          />
        </a>
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between gap-1 text-[.875rem] font-semibold sm:justify-start sm:gap-7 md:text-[.9rem] max-[360px]:text-[.82rem]"
        >
          {navigation.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="inline-flex min-h-11 items-center hover:underline"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-[#302751] px-2.5 hover:underline md:px-5 max-[410px]:px-2"
          >
            <Headset
              aria-hidden="true"
              className="hidden size-4 shrink-0 min-[411px]:block md:size-5"
              strokeWidth={1.65}
            />
            Contact us
          </a>
        </nav>
      </div>
      <NavigationHeight />
    </header>
  );
}
