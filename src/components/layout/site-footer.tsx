import Image from 'next/image';

import footerWordmark from '@/images/bidacash-footer.png';

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-[#dfdfef]">
      <div className="wrap grid gap-6 py-11 md:grid-cols-2">
        <div>
          <a
            href="#top"
            className="mb-2 inline-flex min-h-11 items-center"
            aria-label="BidaCash home"
          >
            <Image
              src={footerWordmark}
              alt="BidaCash"
              className="h-auto w-[142px]"
              sizes="142px"
            />
          </a>
          <p className="my-2">Corporate Name: Luminous Lending Inc.</p>
          <p className="my-2">Online Lending Platform: Bidacash</p>
        </div>
        <div>
          <p className="my-2">SEC Company Registration No.: 2025080212723-24</p>
          <p className="my-2">SEC Certificate of Authority No.: L-25-0921-45</p>
          <p className="my-2">
            Principal Office: Unit 1207, The Finance Centre, 26th St cor. 9th
            Ave., BGC, Taguig, Metro Manila, 1635, Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
