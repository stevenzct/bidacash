import Image from 'next/image';

import calendar from '@/images/loan-calendar.webp';
import interest from '@/images/loan-interest.webp';
import wallet from '@/images/loan-wallet.webp';
import presenter from '@/images/product-presenter.webp';
import { ProductArtwork } from '@/components/sections/product-artwork';
import { Disclosure } from '@/components/ui/disclosure';

const loanFacts = [
  {
    title: 'Loan amount',
    caption: 'Estimated loan range',
    value: '₱1,000–₱50,000',
    note: 'Philippine pesos',
    image: wallet,
  },
  {
    title: 'Loan term',
    caption: 'Available terms',
    value: '3, 6, 9, 12 or 24 months',
    image: calendar,
  },
  {
    title: 'Interest rate',
    caption: 'Nominal annual interest',
    value: '40%',
    note: 'Approximately 3.33% per month',
    image: interest,
  },
];

const eligibility = [
  'Filipino citizens aged 18–65.',
  'Valid government-issued ID and basic information.',
  'Active mobile number.',
  'Regular income from employment, self-employment, business, or remittances.',
];

const loanFeatures = [
  'Loan amounts: PHP 1,000 to PHP 50,000',
  'Loan terms: Flexible tenors of 3, 6, 9, 12, or 24 months, with repayment options available on a weekly or monthly schedule to align with borrower cash flow',
  'Nominal interest rate: 40% per annum (equivalent to approx. 3.33% per month / 0.11% per day)',
  'All-in cost: all interest and applicable fees combined will never exceed the ceilings prescribed by the SEC',
  'Total cost cap: you will never be charged interest, fees, charges and penalties exceeding 100% of the amount you borrowed, no matter how long the loan remains outstanding',
];

function LoanFactCards() {
  return (
    <ol className="loan-facts relative z-3 mx-auto grid max-w-content list-none gap-2.5 min-[851px]:grid-cols-3 min-[851px]:gap-4">
      {loanFacts.map(({ title, caption, value, note, image }, index) => (
        <li
          key={title}
          className="loan-fact flex min-w-0 flex-col rounded-[20px] bg-white"
        >
          <h3 className="loan-fact-title flex items-center gap-[.65rem] font-bold">
            <span
              aria-hidden="true"
              className="grid size-[1.65em] shrink-0 place-items-center rounded-[.45em] bg-[#ead6ff] text-[#7615c9]"
            >
              {index + 1}
            </span>
            {title}
          </h3>
          <div className="loan-fact-body flex flex-1 items-center">
            <Image
              src={image}
              alt=""
              className="shrink-0 object-contain"
              sizes="82px"
            />
            <div className="min-w-0 border-l border-[#d6c8ef]">
              <small>{caption}</small>
              <strong>{value}</strong>
              {note && <p>{note}</p>}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function LoanDisclosures() {
  return (
    <div className="loan-disclosures relative isolate mt-6 grid gap-2.5 overflow-hidden rounded-[22px]">
      <Disclosure id="eligibility" title="Who may apply?" initiallyOpen>
        <ul role="list">
          {eligibility.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Disclosure>
      <Disclosure title="Indicative loan features">
        <ul role="list">
          {loanFeatures.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Disclosure>
      <Disclosure title="What you receive before confirming a loan">
        <p>
          Before you confirm any loan, you will receive a Loan Disclosure
          Statement showing the amount approved, the net amount you will
          receive, the interest rate (monthly and effective interest rate), the
          term, all fees and charges, any penalty for late payment, the
          repayment schedule and the total amount payable, in accordance with
          the Truth in Lending Act (R.A. No. 3765) and applicable SEC rules. No
          loan will be disbursed unless you have reviewed and expressly
          confirmed the final terms. Please study the terms and conditions in
          the Disclosure Statement before proceeding with any loan transaction.
        </p>
      </Disclosure>
    </div>
  );
}

export function Products() {
  return (
    <section
      id="products"
      className="section-space overflow-x-clip pt-0"
      aria-labelledby="loan-overview-title"
    >
      <div className="wrap">
        <div className="loan-guide relative isolate">
          <div className="loan-banner relative z-1 flex flex-col lg:grid lg:items-center">
            <div className="loan-copy relative z-1">
              <Image
                src="/images/bidacash-wordmark.svg"
                width={1470}
                height={410}
                alt="BidaCash"
                className="loan-wordmark h-auto"
              />
              <h2 id="loan-overview-title" className="brand-heading loan-title">
                Our Loan <span className="text-brand-accent">Product</span>
              </h2>
              <p className="loan-lead max-w-[52ch] text-brand-muted">
                Bidacash offers unsecured, general-purpose personal loans
                designed for the short-term needs of working Filipinos — whether
                you are locally employed, self-employed, an overseas Filipino
                worker (OFW), or managing your household finances.
              </p>
            </div>
            <div className="loan-visual relative">
              <ProductArtwork />
            </div>
          </div>
          <div className="loan-portrait pointer-events-none relative z-2 mx-auto h-0 max-w-content">
            <Image
              src={presenter}
              alt=""
              className="absolute bottom-0 left-1/2 h-auto max-w-none -translate-x-1/2 lg:-bottom-0.5 lg:left-auto lg:translate-x-0"
              sizes="(min-width: 1245px) 684px, (min-width: 1024px) 55vw, (min-width: 520px) 520px, 100vw"
            />
          </div>
          <LoanFactCards />
        </div>
        <LoanDisclosures />
      </div>
    </section>
  );
}
