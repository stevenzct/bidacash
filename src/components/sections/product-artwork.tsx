import Image from 'next/image';

export function ProductArtwork() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <svg
        viewBox="0 0 1017 503"
        preserveAspectRatio="xMidYMax meet"
        className="absolute inset-0 size-full overflow-visible"
      >
        <path
          className="fill-brand-lavender"
          d="M-30000 465H-1350C-1110 465 -1040 452 -760 452S-120 454 106 449C206 447 245 405 296 321C376 189 469 143 610 143C809 143 851 220 910 314S1046 492 1272 492H30000V505H-30000Z"
        />
      </svg>
      <Image
        src="/images/loan-guide-coins.svg"
        alt=""
        fill
        unoptimized
        fetchPriority="low"
        className="object-contain object-bottom"
      />
    </div>
  );
}
