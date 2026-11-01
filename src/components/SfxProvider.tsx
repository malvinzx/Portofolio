import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { sfx } from '@/lib/sfx';

const Ctx = createContext({ muted: false, toggle: () => {} });
export const useSfx = () => useContext(Ctx);

const SEL = 'button,a[href],[role="button"],[role="menuitem"],input,summary,.btn';
const asEl = (e: Event) => (e.target instanceof Element ? e.target : null);

/** Memasang suara klik/hover/navigasi secara global lewat delegasi event. */
export function SfxProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(sfx.isMuted());
  useEffect(() => {
    const down = (e: PointerEvent) => {
      sfx.unlock();
      const t = asEl(e);
      if (t?.closest('a[href^="#"]')) sfx.whoosh();
      else if (t?.closest(SEL)) sfx.click();
      else sfx.tap();
    };
    const over = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const t = asEl(e)?.closest(SEL);
      if (t && !t.contains(e.relatedTarget as Node)) sfx.hover();
    };
    document.addEventListener('pointerdown', down, true);
    document.addEventListener('pointerover', over, true);
    return () => { document.removeEventListener('pointerdown', down, true); document.removeEventListener('pointerover', over, true); };
  }, []);
  const toggle = () => { const m = !muted; sfx.setMuted(m); setMuted(m); if (!m) sfx.click(); };
  return <Ctx.Provider value={{ muted, toggle }}>{children}</Ctx.Provider>;
}

export function SoundToggle() {
  const { muted, toggle } = useSfx();
  return (
    <button className="btn icon-btn" onClick={toggle} aria-pressed={!muted} aria-label={muted ? 'Nyalakan efek suara' : 'Matikan efek suara'}>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 9v6h4l5 4V5L7 9H3z" />
        {muted
          ? <path d="M16 9l5 6M21 9l-5 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          : <path d="M15.5 8.5a5 5 0 010 7M18 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
      </svg>
    </button>
  );
}
