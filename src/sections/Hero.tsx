import { BlurText, RotatingText, TechText } from '@/components/reactbits';
import { profile } from '@/data/profile';
import { useTheme } from '@/theme/ThemeProvider';

export default function Hero() {
  const { meta } = useTheme();
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <h1 className="sr-only">{profile.name} — Programmer &amp; Digital Creator</h1>
        <div className="hero-tech">
          <TechText text={profile.name} fontWeight={700} fontSize={240} align="left" reveal="letter" intro="assemble" accentColor={meta.dark ? meta.accent : 'currentColor'} />
        </div>
        <div className="hero-roles">
          <span>Saya</span>
          <RotatingText texts={profile.roles} effect="drop" highlight highlightColor={meta.accent} rotationInterval={2400} staggerDuration={0.02} />
        </div>
        <BlurText className="lead" text={profile.tagline} effect="focus" animateBy="words" trigger="load" delay={90} />
        <div className="btns">
          <a className="btn btn-primary" href="#project">Lihat project</a>
          <a className="btn" href="#sosmed">Hubungi saya</a>
        </div>
      </div>
    </section>
  );
}
