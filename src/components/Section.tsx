import type { ReactNode } from 'react';
import { SplitText } from '@/components/reactbits';

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="sec">
      <div className="wrap">
        <SplitText tag="h2" text={title} splitType="words" effect="rise" textAlign="left" delay={60} duration={0.9} />
        {children}
      </div>
    </section>
  );
}
