import Image from 'next/image';
import {
  Copyright,
  FileText,
  HandHeart,
  LockKeyhole,
  Scale,
  UserRoundCheck,
} from 'lucide-react';

import reviewImage from '@/images/compliance-review.webp';
import { Disclosure } from '@/components/ui/disclosure';

const notices = [
  {
    title: '1. Important Notice on Loan Information',
    icon: FileText,
    paragraphs: [
      'This website is provided for general information purposes only. Nothing on this website constitutes an offer, an approval, or a commitment to lend. All loan applications are subject to credit evaluation and approval. The final terms and conditions of any loan will be set out in the Loan Disclosure Statement, the Loan Agreement, and the schedule of fees provided to you before disbursement. Please read these documents carefully before confirming your loan.',
    ],
  },
  {
    title: '2. Data Privacy Notice',
    icon: LockKeyhole,
    paragraphs: [
      'We value your privacy. In line with the Data Privacy Act of 2012 (R.A. No. 10173):',
      'What we collect on this website: basic technical and device information (such as your IP address, browser type, device identifiers), and any information you voluntarily provide through our contact channels (such as your name, e-mail address and mobile number).',
      'Why we collect it: to operate and secure this website, to respond to your inquiries, and to improve our services. When you apply for a loan through our platform, additional personal information will be collected only with your separate consent.',
      'Your rights: you have the right to be informed; to access, correct, and request the deletion of your personal data; to object to certain processing; and to lodge a complaint with the National Privacy Commission (NPC).',
      'How we protect your data: we maintain organizational, physical and technical security measures, restrict access to authorized personnel, and retain personal data only for as long as necessary for the stated purposes or as required by law.',
    ],
  },
  {
    title: '3. Fair and Lawful Collection',
    icon: HandHeart,
    paragraphs: [
      'Luminous Lending Inc. does not engage in abusive or unfair debt collection practices, in compliance with SEC Memorandum Circular No. 18, Series of 2019. We will never: use or threaten violence or other criminal means; use insults, obscenities or profane language; publish or publicly shame any borrower for non-payment; contact you before 6:00 a.m. or after 10:00 p.m., except as permitted by law; or contact persons in your phone contact list who are not your named co-maker or guarantor. Your contacts and character references are never treated as guarantors, or as persons liable for your loan, without their separate written consent.',
    ],
  },
  {
    title: '4. Governing Law and Jurisdiction',
    icon: Scale,
    paragraphs: [
      'This website and the loan products described here are governed by the laws of the Republic of the Philippines. Any dispute arising from or in connection with this website shall be brought before the proper courts of Taguig City, Metro Manila, Philippines, without prejudice to your rights under applicable consumer protection laws.',
    ],
  },
  {
    title: '5. Acceptable Use',
    icon: UserRoundCheck,
    paragraphs: [
      'You may use this website only for lawful purposes. You must not: copy, scrape or harvest content or data from this website by automated means; impersonate any person or misrepresent your identity or affiliation; interfere with, disrupt, or attempt to gain unauthorized access to this website, its servers or networks; or use this website in any manner that violates applicable laws or regulations. We reserve the right to restrict access to any user who violates these terms.',
    ],
  },
  {
    title: '6. Intellectual Property',
    icon: Copyright,
    paragraphs: [
      'All content on this website — including the Bidacash name and logo, the Luminous Lending Inc. name, and the website design, text, graphics and software — is owned by, or licensed to, Luminous Lending Inc. and is protected by Philippine and international intellectual property laws. No part of this website may be reproduced, distributed, modified or used for any commercial purpose without our prior written consent.',
    ],
  },
];

export function Compliance() {
  return (
    <section
      id="compliance"
      className="compliance-section"
      aria-labelledby="compliance-title"
    >
      <div className="wrap compliance-grid grid items-start">
        <div className="compliance-intro rounded-[26px] bg-[#f2edfa]">
          <p className="mb-3.5 text-[.76rem] font-bold tracking-[.15em] text-brand-purple uppercase">
            Compliance
          </p>
          <h2
            id="compliance-title"
            className="compliance-title mb-4 max-w-[11ch] font-[575] text-brand-heading"
          >
            Terms &amp; disclosures.
          </h2>
          <p className="text-brand-muted">
            Review how loan information, personal data and borrower rights are
            handled.
          </p>
          <Image
            src={reviewImage}
            alt=""
            className="mx-auto mt-7 h-auto w-full max-w-[420px] rounded-[18px] min-[781px]:max-w-none"
            sizes="(min-width: 1422px) 380px, (min-width: 781px) 30vw, (min-width: 520px) 420px, 76vw"
          />
        </div>
        <div className="compliance-notices min-w-0">
          <p className="mb-5 text-[#211c46]">
            Welcome to the website of Bidacash, operated by Luminous Lending
            Inc. ( “we”, “us” or “our”), a lending company duly registered with
            the Securities and Exchange Commission of the Philippines (SEC
            Registration No. 2025080212723-24) and authorized to operate as a
            lending company under Certificate of Authority No. L-25-0921-45. We
            may update this page from time to time. The latest version is the
            one posted on this website. If you have questions, please contact us
            through the details in the Customer Support section.
          </p>
          {notices.map(({ title, icon, paragraphs }) => (
            <Disclosure key={title} title={title} icon={icon}>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
