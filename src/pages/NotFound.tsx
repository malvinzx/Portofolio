import { useEffect } from 'react';
import { BlurText, TechText } from '@/components/reactbits';
import { useTheme } from '@/theme/ThemeProvider';
import { sfx } from '@/lib/sfx';

export default function NotFound() {
  const { meta } = useTheme();
  useEffect(() => { sfx.error(); }, []);
  return (
    <main className="nf">
      <div className="wrap">
        <h1 className="sr-only">404 — Halaman tidak ditemukan</h1>
        <div className="nf-tech"><TechText text="404" fontWeight={700} fontSize={260} align="center" reveal="letter" intro="assemble" accentColor={meta.dark ? meta.accent : 'currentColor'} /></div>
        <BlurText className="nf-text" text="Halaman yang kamu cari tidak ada." effect="focus" animateBy="words" trigger="load" delay={90} />
        <p className="muted nf-path">Alamat <code>{typeof location !== 'undefined' ? location.pathname : ''}</code> tidak dikenali.</p>
        <div className="btns nf-btns">
          <a className="btn btn-primary" href="/">Kembali ke Home</a>
          <button className="btn" onClick={() => history.back()}>Halaman sebelumnya</button>
        </div>
      </div>
    </main>
  );
}
