import Image from 'next/image';
import { ArrowRight, Headset } from 'lucide-react';

import { MobileNavigation } from '@/components/layout/mobile-navigation';
import { NavigationHeight } from '@/components/layout/navigation-height';

const navigation = [
  { href: '#products', label: 'Products' },
  { href: '#about', label: 'About' },
  { href: '#compliance', label: 'Compliance' },
];

function NavigationLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav
      aria-label="Main navigation"
      className={
        mobile
          ? 'mobile-navigation-links flex min-h-0 flex-1 flex-col text-lg font-semibold sm:text-xl'
          : 'hidden items-center gap-7 text-[.9rem] font-semibold lg:flex'
      }
    >
      <div
        className={
          mobile
            ? 'min-h-0 flex-1 divide-y divide-brand-lavender overflow-y-auto overscroll-contain'
            : 'flex items-center gap-7'
        }
      >
        {navigation.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={
              mobile
                ? 'flex min-h-(--mobile-menu-row-height) items-center justify-between gap-4 px-[5%] hover:bg-brand-lavender focus-visible:-outline-offset-4'
                : 'inline-flex min-h-11 items-center hover:underline'
            }
          >
            {label}
            {mobile && (
              <span
                aria-hidden="true"
                className="grid size-11 shrink-0 place-items-center"
              >
                <ArrowRight
                  className="size-6 text-brand-accent"
                  strokeWidth={1.65}
                />
              </span>
            )}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className={
          mobile
            ? 'flex min-h-(--mobile-menu-row-height) shrink-0 items-center justify-center gap-3 bg-brand-accent px-[5%] pt-2 pb-[calc(.5rem+env(safe-area-inset-bottom,0px))] text-white hover:bg-[#5e078e] focus-visible:outline-white focus-visible:-outline-offset-4'
            : 'desktop-contact-link ripple-link inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-[#302751] px-5 hover:border-brand-action hover:text-white focus-visible:border-brand-action focus-visible:text-white'
        }
      >
        <Headset
          aria-hidden="true"
          className="size-5 shrink-0"
          strokeWidth={1.65}
        />
        Contact us
      </a>
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header
      id="site-header"
      className="sticky top-0 z-20 bg-white text-brand-navy"
    >
      <div className="wrap flex items-center justify-between gap-5 py-3 lg:py-[17px]">
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
        <NavigationLinks />
        <MobileNavigation>
          <NavigationLinks mobile />
        </MobileNavigation>
      </div>
      <NavigationHeight />
    </header>
  );
}
