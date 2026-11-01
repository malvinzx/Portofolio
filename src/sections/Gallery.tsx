import { useState } from 'react';
import Section from '@/components/Section';
<<<<<<< HEAD
import { CircularCarousel, DepthCarousel, HoloCard, JellyRadio } from '@/components/reactbits';
import { gallery } from '@/data/gallery';
import { useTheme } from '@/theme/ThemeProvider';

const MODES = [{ value: 'depth', label: 'Depth' }, { value: 'orbit', label: 'Orbit' }, { value: 'holo', label: 'Holo' }];

=======
import { CircularCarousel, DepthCarousel, JellyRadio } from '@/components/reactbits';
import { gallery } from '@/data/gallery';
import { useTheme } from '@/theme/ThemeProvider';

>>>>>>> 52e6c963b23e9bf4be2d5b0fd92cf866013618ab
export default function Gallery() {
  const { meta } = useTheme();
  const [mode, setMode] = useState('depth');
  return (
    <Section id="galeri" title="Galeri">
      <div className="gal-head">
<<<<<<< HEAD
        <p className="note">{mode === 'holo' ? 'Gerakkan kursor atau sentuh kartu. Klik untuk membalik.' : 'Geser, scroll, atau pakai panah keyboard.'}</p>
        <JellyRadio items={MODES} value={mode} onChange={(v: string) => setMode(v)} size="md" chipColor={meta.chip} activeColor={meta.accent} textColor={meta.chipText} activeTextColor={meta.onAccent} />
      </div>
      <div className={`gal-stage${mode === 'holo' ? ' gal-stage--holo' : ''}`}>
        {mode === 'depth' && <DepthCarousel items={gallery.map((g) => ({ image: g.src, alt: g.alt }))} autoplay />}
        {mode === 'orbit' && <CircularCarousel items={gallery} preset="orbit" intro="rise" cardWidth={180} aspectRatio={0.75} captions />}
        {mode === 'holo' && <HoloCard image="/cards/holo-front.png" backImage="/cards/holo-back.png" alt="Kartu Malvin Shake" preset="bursts" width={300} />}
=======
        <p className="note">Geser, scroll, atau pakai panah keyboard.</p>
        <JellyRadio items={[{ value: 'depth', label: 'Depth' }, { value: 'orbit', label: 'Orbit' }]} value={mode} onChange={(v: string) => setMode(v)} size="md" chipColor={meta.chip} activeColor={meta.accent} textColor={meta.chipText} activeTextColor={meta.onAccent} />
      </div>
      <div className="gal-stage">
        {mode === 'depth'
          ? <DepthCarousel items={gallery.map((g) => ({ image: g.src, alt: g.alt }))} autoplay />
          : <CircularCarousel items={gallery} preset="orbit" intro="rise" cardWidth={180} aspectRatio={0.75} captions />}
>>>>>>> 52e6c963b23e9bf4be2d5b0fd92cf866013618ab
      </div>
    </Section>
  );
}
