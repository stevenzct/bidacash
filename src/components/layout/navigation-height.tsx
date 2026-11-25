'use client';

import { useEffect } from 'react';

export function NavigationHeight() {
  useEffect(() => {
    const header = document.getElementById('site-header');
    if (!header) return;

    const root = document.documentElement;
    const observer = new ResizeObserver(([entry]) => {
      const height =
        entry.borderBoxSize?.[0]?.blockSize ??
        header.getBoundingClientRect().height;
      root.style.setProperty('--navigation-height', `${height}px`);
    });
    observer.observe(header, { box: 'border-box' });

    return () => {
      observer.disconnect();
      root.style.removeProperty('--navigation-height');
    };
  }, []);

  return null;
}
