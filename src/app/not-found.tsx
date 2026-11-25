import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="wrap py-24">
      <Image
        src="/images/bidacash-wordmark.svg"
        width={1470}
        height={410}
        alt="BidaCash"
        className="mb-8 h-auto w-[142px]"
      />
      <h1 className="brand-heading mb-5 text-4xl">Page not found</h1>
      <Link href="/" className="primary-link inline-flex items-center">
        Return to BidaCash
      </Link>
    </main>
  );
}
