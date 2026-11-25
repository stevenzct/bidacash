import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

type DisclosureProps = {
  title: string;
  children: ReactNode;
  icon?: LucideIcon;
  id?: string;
  initiallyOpen?: boolean;
};

export function Disclosure({
  title,
  children,
  icon: Icon,
  id,
  initiallyOpen,
}: DisclosureProps) {
  return (
    <details id={id} className="disclosure" open={initiallyOpen}>
      <summary>
        {Icon && (
          <Icon
            aria-hidden="true"
            className="size-5 shrink-0 text-[#78539a]"
            strokeWidth={1.65}
          />
        )}
        <span>{title}</span>
      </summary>
      <div className="disclosure-body">{children}</div>
    </details>
  );
}
