'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function MobileNavigation({ children }: { children: ReactNode }) {
  const disclosureRef = useRef<HTMLDetailsElement>(null);
  const toggleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const disclosure = disclosureRef.current;
    if (!disclosure) return;

    const desktop = window.matchMedia('(min-width: 64rem)');
    const closeOnDesktop = () => {
      if (desktop.matches) disclosure.open = false;
    };
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (
        disclosure.open &&
        event.target instanceof Node &&
        !disclosure.contains(event.target)
      ) {
        disclosure.open = false;
      }
    };

    desktop.addEventListener('change', closeOnDesktop);
    document.addEventListener('pointerdown', closeOnOutsidePress);
    return () => {
      desktop.removeEventListener('change', closeOnDesktop);
      document.removeEventListener('pointerdown', closeOnOutsidePress);
    };
  }, []);

  return (
    <details
      id="mobile-navigation"
      ref={disclosureRef}
      className="group shrink-0 lg:hidden"
      onKeyDown={(event) => {
        if (event.key !== 'Escape' || !event.currentTarget.open) return;
        event.preventDefault();
        event.currentTarget.open = false;
        toggleRef.current?.focus();
      }}
      onClick={(event) => {
        if (
          !event.ctrlKey &&
          !event.metaKey &&
          !event.shiftKey &&
          !event.altKey &&
          event.target instanceof Element &&
          event.target.closest('a[href^="#"]')
        ) {
          event.currentTarget.open = false;
        }
      }}
      onBlur={(event) => {
        if (
          event.relatedTarget &&
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          event.currentTarget.open = false;
        }
      }}
    >
      <summary
        ref={toggleRef}
        className="grid size-11 place-items-center text-brand-navy after:content-none"
      >
        <span className="sr-only">Main menu</span>
        <span aria-hidden="true" className="relative h-5 w-6">
          <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1.5 bg-current motion-safe:transition-transform group-open:translate-y-0 group-open:rotate-45" />
          <span className="absolute inset-x-0 top-1/2 h-px bg-current motion-safe:transition-opacity group-open:opacity-0" />
          <span className="absolute inset-x-0 top-1/2 h-px translate-y-1.5 bg-current motion-safe:transition-transform group-open:translate-y-0 group-open:-rotate-45" />
        </span>
      </summary>
      <div className="fixed inset-x-0 top-(--navigation-height) hidden h-[calc(100dvh-var(--navigation-height))] flex-col bg-white group-open:flex">
        {children}
      </div>
    </details>
  );
}
