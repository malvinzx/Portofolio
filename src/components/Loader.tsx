import { useEffect, useRef, useState } from 'react';
import { sfx } from '@/lib/sfx';

const seenBefore = () => { try { return sessionStorage.getItem('seen') === '1'; } catch { return false; } };

/** Layar loading: menunggu font + halaman siap. Kunjungan pertama ada tombol "Masuk" (sekaligus mengaktifkan audio). */
export default function Loader({ onLeave, onDone }: { onLeave: () => void; onDone: () => void }) {
  const [p, setP] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const auto = useRef(seenBefore());
  const leave = useRef(() => {});

  leave.current = () => {
    if (leaving) return;
    setLeaving(true);
    try { sessionStorage.setItem('seen', '1'); } catch { /* abaikan */ }
    sfx.enter();
    onLeave();
    window.setTimeout(onDone, 800);
  };

  useEffect(() => {
    document.documentElement.classList.add('is-loading');
    return () => document.documentElement.classList.remove('is-loading');
  }, []);

  useEffect(() => {
    let loaded = false;
    let raf = 0;
    let value = 0;
    const t0 = performance.now();
    const page = new Promise<void>((r) => (document.readyState === 'complete' ? r() : window.addEventListener('load', () => r(), { once: true })));
    Promise.all([document.fonts?.ready, page]).catch(() => {}).then(() => { loaded = true; });
    const guard = window.setTimeout(() => { loaded = true; }, 6000);
    const step = (now: number) => {
      const sec = (now - t0) / 1000;
      const target = loaded && sec > 1.4 ? 100 : Math.min(90, sec * 60);
      value += (target - value) * 0.12;
      if (Math.abs(target - value) < 0.4) value = target;
      setP(value);
      if (value >= 100) { setReady(true); return; }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(raf); window.clearTimeout(guard); };
  }, []);

  useEffect(() => {
    if (ready && auto.current) { const id = window.setTimeout(() => leave.current(), 250); return () => window.clearTimeout(id); }
  }, [ready]);

  return (
    <div className={`loader${leaving ? ' loader--out' : ''}`} role="status" aria-live="polite" aria-label="Memuat">
      <div className="loader-inner">
        <p className="loader-name">MALVIN</p>
        <div className="loader-bar"><span style={{ transform: `scaleX(${p / 100})` }} /></div>
        <p className="loader-pct">{ready ? 'Siap' : `Memuat ${Math.round(p)}%`}</p>
        {ready && !auto.current && !leaving && <button className="btn btn-primary" onClick={() => leave.current()}>Masuk</button>}
      </div>
    </div>
  );
}
