import Image from 'next/image';
import { ClipboardList, ReceiptText, ShieldCheck } from 'lucide-react';

import heroArtwork from '@/images/hero-loan-approved.webp';

const benefits = [
  { label: ['Transparent', 'Pricing'], icon: ReceiptText },
  { label: ['Simple', 'Application'], icon: ClipboardList },
  { label: ['Secure and', 'Compliant'], icon: ShieldCheck },
];

export function Hero() {
  return (
    <section
      className="hero isolate overflow-hidden text-brand-heading"
      aria-labelledby="hero-title"
    >
      <div className="wrap hero-frame grid items-center">
        <div className="hero-copy relative z-1 text-center lg:text-left">
          <h1 id="hero-title" className="brand-heading hero-title">
            Fast. Transparent.
            <br />
            <span className="text-brand-accent">Responsible Lending.</span>
          </h1>
          <p className="hero-lead mx-auto max-w-[42ch] text-brand-muted lg:mx-0 lg:max-w-[54ch]">
            Explore short-term personal loans for qualified Filipino borrowers.
            <br className="hidden lg:block" /> Review fees and requirements
            before you borrow.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start lg:gap-x-[23px]">
            <a
              className="primary-link ripple-link inline-flex min-h-11 items-center"
              href="#products"
            >
              View loan details
            </a>
            <a
              className="inline-flex min-h-11 items-center text-[.94rem] font-semibold underline underline-offset-[5px]"
              href="#eligibility"
            >
              Who can apply?
            </a>
          </div>
        </div>
        <div className="hero-picture relative self-end">
          <div className="hero-artwork">
            <svg
              viewBox="0 82 1639 877"
              className="w-full overflow-visible"
              aria-hidden="true"
            >
              <path
                className="fill-brand-lavender"
                d="M-16384 850H-700 C-420 850 -200 848 0 814 C220 777 420 799 600 780 C750 764 789 635 820 465 C857 263 1054 123 1250 145 C1465 130 1626 264 1626 450 C1626 580 1560 651 1560 701 C1560 773 1752 787 1900 804 C2150 833 2450 836 2800 836 H18023V4096H-16384Z"
              />
            </svg>
            <Image
              src={heroArtwork}
              alt="Woman holding a phone beside a Loan approved badge and a blue wallet with Philippine peso notes and two gold coins."
              className="hero-image"
              fetchPriority="high"
              loading="eager"
              sizes="(min-width: 1423px) 692px, (min-width: 1024px) 49vw, (min-width: 498px) 448px, 90vw"
            />
          </div>
        </div>
        <ul
          role="list"
          aria-label="Why Bidacash"
          className="hero-benefits relative col-span-full grid list-none"
        >
          {benefits.map(({ label: [firstLine, lastLine], icon: Icon }) => (
            <li
              key={firstLine}
              className="hero-benefit flex items-center text-[#110e3b]"
            >
              <span className="hero-benefit-icon shrink-0" aria-hidden="true">
                <Icon
                  className="size-[var(--hero-benefit-icon-size,27px)] text-[#7916b0] xl:size-[var(--hero-benefit-icon-size,32px)]"
                  strokeWidth={1.8}
                />
              </span>
              <span>
                {firstLine}{' '}
                <span className="hero-benefit-label-end">{lastLine}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
