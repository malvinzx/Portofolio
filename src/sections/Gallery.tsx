import { useState } from 'react';
import Section from '@/components/Section';
import { CircularCarousel, DepthCarousel, JellyRadio } from '@/components/reactbits';
import { gallery } from '@/data/gallery';
import { useTheme } from '@/theme/ThemeProvider';

export default function Gallery() {
  const { meta } = useTheme();
  const [mode, setMode] = useState('depth');
  return (
    <Section id="galeri" title="Galeri">
      <div className="gal-head">
        <p className="note">Geser, scroll, atau pakai panah keyboard.</p>
        <JellyRadio items={[{ value: 'depth', label: 'Depth' }, { value: 'orbit', label: 'Orbit' }]} value={mode} onChange={(v: string) => setMode(v)} size="md" chipColor={meta.chip} activeColor={meta.accent} textColor={meta.chipText} activeTextColor={meta.onAccent} />
      </div>
      <div className="gal-stage">
        {mode === 'depth'
          ? <DepthCarousel items={gallery.map((g) => ({ image: g.src, alt: g.alt }))} autoplay />
          : <CircularCarousel items={gallery} preset="orbit" intro="rise" cardWidth={180} aspectRatio={0.75} captions />}
      </div>
    </Section>
  );
}
