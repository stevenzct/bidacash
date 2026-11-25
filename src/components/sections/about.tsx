import Image from 'next/image';
import { Flag, Target } from 'lucide-react';

import aboutImage from '@/images/about-bidacash.webp';
import { Disclosure } from '@/components/ui/disclosure';

const values = [
  {
    title: 'Our Mission',
    icon: Flag,
    body: 'To give everyday Filipinos — employees, workers, entrepreneurs and overseas Filipino workers — fair and convenient access to short-term credit, without hidden fees and without heavy paperwork.',
  },
  {
    title: 'Our Vision',
    icon: Target,
    body: 'To be a trusted digital lending platform supporting financial inclusion in the Philippines through transparent, responsible and technology-driven lending.',
  },
];

export function About() {
  return (
    <section
      id="about"
      className="about-section overflow-clip bg-brand-lavender"
      aria-labelledby="about-title"
    >
      <div className="wrap">
        <div className="about-intro relative isolate grid items-center md:grid-cols-2">
          <Image
            src={aboutImage}
            alt="BidaCash"
            className="about-plaque row-start-2 mx-auto h-auto w-full max-w-[420px] md:row-start-auto md:max-w-none"
            sizes="(min-width: 1422px) 600px, (min-width: 768px) 43vw, (min-width: 467px) 420px, 90vw"
          />
          <div className="about-copy">
            <h2 id="about-title" className="brand-heading about-title mb-5">
              About <span className="text-brand-accent">Us</span>
            </h2>
            <p className="about-lead max-w-[68ch] text-brand-copy">
              Bidacash is the online lending platform of Luminous Lending Inc.,
              a lending company duly registered with the Securities and Exchange
              Commission (SEC) of the Philippines. We provide simple,
              transparent and accessible short-term personal loans to qualified
              Filipino borrowers — with every fee and charge clearly disclosed
              before you borrow.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-content gap-4 md:grid-cols-2 md:gap-5">
          {values.map(({ title, icon: Icon, body }) => (
            <div
              key={title}
              className="about-value grid grid-cols-[auto_1fr] content-start gap-x-3.5 gap-y-2 rounded-[20px] border border-[#e9dcf7] bg-white md:gap-x-5"
            >
              <Icon
                aria-hidden="true"
                strokeWidth={1.7}
                className="row-span-2 size-[42px] rounded-[14px] bg-[#f0e3ff] p-2.5 text-[#7712c4] md:size-[52px] md:p-3"
              />
              <h3 className="about-value-title font-bold text-brand-heading">
                {title}
              </h3>
              <p className="text-brand-copy">{body}</p>
            </div>
          ))}
        </div>
        <div className="about-company mx-auto mt-7 max-w-content">
          <Disclosure title="About Luminous Lending Inc.">
            <p>
              Luminous Lending Inc. is a SEC-registered, compliance-focused
              lending company headquartered in Bonifacio Global City, Taguig,
              Metro Manila, Philippines, delivering responsible direct lending
              solutions to serve the domestic market. Our core business centers
              on customer-first direct lending services: in full alignment with
              Philippine financial regulatory frameworks, we do not engage in
              pawnbroking operations under Presidential Decree No. 114, nor
              operate as a financing company under Republic Act No. 8556.
            </p>
            <h3 className="mb-3 text-[1.12rem] font-bold text-brand-heading">
              Our lending approach
            </h3>
            <p>
              We design accessible personal lending products tailored to diverse
              customer needs, with flexible loan terms ranging from 3 to 24
              months and convenient weekly or monthly repayment options to make
              borrowing manageable for every user. We uphold the highest
              standards of fair and transparent practice by strictly following
              all SEC mandates, including prohibitions on unfair debt collection
              tactics, mandatory clear disclosure for all lending
              advertisements, and standardized reporting for online lending
              platforms, to ensure every interaction with our customers is
              respectful, straightforward, and trustworthy.
            </p>
          </Disclosure>
        </div>
      </div>
    </section>
  );
}
