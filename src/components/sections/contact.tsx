import Image from 'next/image';
import { Clock3, Mail, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import supportImage from '@/images/contact-support.webp';
import { Disclosure } from '@/components/ui/disclosure';

function SupportField({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="support-field flex min-w-0 items-center gap-3.5">
      <Icon
        aria-hidden="true"
        strokeWidth={1.65}
        className="size-11 shrink-0 rounded-[13px] bg-[#f2e7ff] p-2.5 text-[#7614c3]"
      />
      <div>{children}</div>
    </div>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="support-title"
    >
      <div className="support-stage">
        <div className="wrap support-hero grid items-center gap-y-4 pt-6 lg:gap-y-0">
          <div>
            <h2
              id="support-title"
              className="support-title font-[575] text-brand-heading"
            >
              Contact <span className="text-brand-accent">Us</span>
            </h2>
            <p className="support-lead mt-[18px] max-w-[42ch] text-brand-copy">
              Get in touch with our customer support team for inquiries,
              guidance, and assistance.
            </p>
          </div>
          <Image
            src={supportImage}
            alt=""
            className="support-image block w-auto max-w-full self-end justify-self-center object-contain object-bottom lg:w-full"
            sizes="(min-width: 1422px) 640px, (min-width: 1024px) 45vw, (min-width: 498px) 384px, 77vw"
          />
        </div>
      </div>
      <div className="wrap relative">
        <div className="support-info grid rounded-[22px] border border-[#e5d6f6] bg-white leading-normal text-[#211c46]">
          <SupportField icon={Mail}>
            <p>
              <strong>E-mail:</strong> Pending confirmation.
            </p>
            <p>
              <strong>Mobile:</strong> Pending confirmation.
            </p>
          </SupportField>
          <SupportField icon={MapPin}>
            <p>
              <strong>Office:</strong> Unit 1207, The Finance Centre, 26th St
              cor. 9th Ave., BGC, Taguig, Metro Manila, 1635, Philippines
            </p>
          </SupportField>
          <SupportField icon={Clock3}>
            <p>
              <strong>Support hours:</strong> Monday to Friday, 9:00 a.m. to
              6:00 p.m. (Philippine Time), excluding public holidays
            </p>
          </SupportField>
        </div>
        <div className="support-help mt-[22px] grid gap-2">
          <Disclosure title="How we handle complaints:">
            <div>
              <p>
                <strong>Step 1 — </strong>Send us your concern through any
                official channel above, indicating your full name and registered
                mobile number.
              </p>
              <p>
                <strong>Step 2 — </strong>We will acknowledge receipt of your
                complaint within five (5) business days.
              </p>
              <p>
                <strong>Step 3 — </strong>We will investigate and provide a
                resolution or a status update within ten (10) business days.
              </p>
            </div>
          </Disclosure>
          <Disclosure title="Escalate a concern">
            <div>
              <p>
                If you are not satisfied with our resolution, you may escalate
                your concern to the Securities and Exchange Commission (SEC) of
                the Philippines, or to the National Privacy Commission (NPC) for
                concerns involving your personal data.
              </p>
            </div>
          </Disclosure>
          <Disclosure title="Beware of impersonators:">
            <div>
              <p>
                Bidacash and Luminous Lending Inc. communicate only through the
                official channels listed above. Please report any suspicious
                account claiming to represent us.
              </p>
            </div>
          </Disclosure>
        </div>
      </div>
    </section>
  );
}
