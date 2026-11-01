import { useEffect, useRef, useState } from 'react';
import { sfx } from '@/lib/sfx';

/** Bar progres scroll di atas layar. */
export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={bar} className="scroll-progress" aria-hidden="true" />;
}

/** Notifikasi saat koneksi internet terputus / kembali. */
export function NetworkToast() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    let id = 0;
    const show = (text: string, ok: boolean) => {
      setMsg(text);
      ok ? sfx.success() : sfx.error();
      window.clearTimeout(id);
      id = window.setTimeout(() => setMsg(''), 3200);
    };
    const off = () => show('Koneksi terputus', false);
    const on = () => show('Kembali online', true);
    window.addEventListener('offline', off);
    window.addEventListener('online', on);
    return () => { window.removeEventListener('offline', off); window.removeEventListener('online', on); window.clearTimeout(id); };
  }, []);
  return msg ? <div className="toast card" role="status">{msg}</div> : null;
}
