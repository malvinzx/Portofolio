import { useState } from 'react';
import Section from '@/components/Section';
import { CircularCarousel, DepthCarousel, HoloCard, JellyRadio } from '@/components/reactbits';
import { gallery } from '@/data/gallery';
import { useTheme } from '@/theme/ThemeProvider';

const MODES = [{ value: 'depth', label: 'Depth' }, { value: 'orbit', label: 'Orbit' }, { value: 'holo', label: 'Holo' }];

export default function Gallery() {
  const { meta } = useTheme();
  const [mode, setMode] = useState('depth');
  return (
    <Section id="galeri" title="Galeri">
      <div className="gal-head">
        <p className="note">{mode === 'holo' ? 'Gerakkan kursor atau sentuh kartu. Klik untuk membalik.' : 'Geser, scroll, atau pakai panah keyboard.'}</p>
        <JellyRadio items={MODES} value={mode} onChange={(v: string) => setMode(v)} size="md" chipColor={meta.chip} activeColor={meta.accent} textColor={meta.chipText} activeTextColor={meta.onAccent} />
      </div>
      <div className={`gal-stage${mode === 'holo' ? ' gal-stage--holo' : ''}`}>
        {mode === 'depth' && <DepthCarousel items={gallery.map((g) => ({ image: g.src, alt: g.alt }))} autoplay />}
        {mode === 'orbit' && <CircularCarousel items={gallery} preset="orbit" intro="rise" cardWidth={180} aspectRatio={0.75} captions />}
        {mode === 'holo' && <HoloCard image="/cards/holo-front.png" backImage="/cards/holo-back.png" alt="Kartu Malvin Shake" preset="bursts" width={300} />}
      </div>
    </Section>
  );
}
