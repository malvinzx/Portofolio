import { useEffect, useRef, useState } from 'react';
import Section from '@/components/Section';
import { AnimatedList, ElasticSlider } from '@/components/reactbits';
import { tracks } from '@/data/tracks';
import { useTheme } from '@/theme/ThemeProvider';

const I = { prev: 'M6 5h2v14H6zM20 5v14L9 12z', next: 'M16 5h2v14h-2zM4 5l11 7L4 19z', play: 'M7 4l13 8-13 8z', pause: 'M6 4h4v16H6zM14 4h4v16h-4z' };
const Icon = ({ d }: { d: string }) => <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>;

export default function Music() {
  const { meta } = useTheme();
  const audio = useRef<HTMLAudioElement>(null);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const [vol, setVol] = useState(70);
  const [missing, setMissing] = useState(false);
  const t = tracks[i];

  useEffect(() => { if (audio.current) audio.current.volume = vol / 100; }, [vol]);
  useEffect(() => {
    setMissing(false); setPos(0);
    if (playing) audio.current?.play().catch(() => setPlaying(false));
  }, [i]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = () => {
    const el = audio.current;
    if (!el) return;
    if (playing) el.pause();
    else el.play().catch(() => setMissing(true));
  };
  const go = (d: number) => setI((n) => (n + d + tracks.length) % tracks.length);

  return (
    <Section id="musik" title="Musik">
      <div className="music">
        <div className="card now">
          <p className="muted">Sedang diputar</p>
          <h3>{t.title}</h3>
          <p className="muted">{t.artist}</p>
          <div className="ctrl">
            <button className="btn icon-btn" onClick={() => go(-1)} aria-label="Lagu sebelumnya"><Icon d={I.prev} /></button>
            <button className="btn btn-primary icon-btn" onClick={toggle} aria-label={playing ? 'Jeda' : 'Putar'}><Icon d={playing ? I.pause : I.play} /></button>
            <button className="btn icon-btn" onClick={() => go(1)} aria-label="Lagu berikutnya"><Icon d={I.next} /></button>
          </div>
          <div className="sliders">
            <ElasticSlider value={pos} maxValue={100} leftIcon={null} rightIcon={null} valuePosition="none" onChangeEnd={(v: number) => { const a = audio.current; if (a && a.duration) a.currentTime = (v / 100) * a.duration; }} />
            <ElasticSlider value={vol} onChange={setVol} />
          </div>
          {missing && <p className="note">File <code>{t.src}</code> belum ada. Taruh musikmu di <code>public/music/</code>.</p>}
          <audio ref={audio} src={t.src} preload="metadata"
            onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => go(1)} onError={() => setMissing(true)}
            onTimeUpdate={(e) => { const a = e.currentTarget; setPos(a.duration ? (a.currentTime / a.duration) * 100 : 0); }} />
        </div>
        <AnimatedList items={tracks.map((x) => ({ title: x.title, description: x.artist }))} initialSelectedIndex={0} animation="slide" theme={meta.dark ? 'dark' : 'light'} width="100%" maxHeight={340}
          onItemSelect={(_: unknown, k: number) => { setI(k); setPlaying(true); }} />
      </div>
    </Section>
  );
}
