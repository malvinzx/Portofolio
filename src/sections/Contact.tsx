import { lazy, Suspense } from 'react';
import Section from '@/components/Section';
import { CurvedInput } from '@/components/reactbits';
import { profile } from '@/data/profile';
import { useTheme } from '@/theme/ThemeProvider';

const Lanyard = lazy(() => import('@/components/reactbits/Lanyard/Lanyard.jsx'));

export default function Contact() {
  const { meta } = useTheme();
  const send = (v: string) => { window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Halo Malvin')}&body=${encodeURIComponent(v)}`; };
  return (
    <Section id="sosmed" title="Sosmed">
      <div className="contact">
        <div>
          <div className="social-list">
            {profile.socials.map((s) => (
              <a key={s.label} className="btn" href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><span>{s.label}</span><small>{s.handle}</small></a>
            ))}
          </div>
          <CurvedInput type="text" placeholder="Tulis pesan singkat…" buttonText="Kirim" theme={meta.dark ? 'dark' : 'light'} width="100%" height={56} bend={16} onSubmit={send} />
        </div>
        <div className="lanyard-box"><Suspense fallback={null}><Lanyard frontImage="/cards/front.png" backImage="/cards/back.png" /></Suspense></div>
      </div>
    </Section>
  );
}
