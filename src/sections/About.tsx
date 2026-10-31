import Section from '@/components/Section';
import { BlurText, CountUp } from '@/components/reactbits';
import { profile } from '@/data/profile';
import { tracks } from '@/data/tracks';

const stats = [
  ['Bahasa', profile.languages.length], ['Framework & library', profile.frameworks.length],
  ['Tools', profile.tools.length], ['Skill desain', profile.design.length]
] as const;

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="about-text">
        {profile.about.map((p) => <BlurText key={p} text={p} effect="focus" animateBy="words" delay={25} stepDuration={0.3} distance={0} />)}
      </div>
      <div className="stats">
        {stats.map(([label, n]) => (
          <div key={label} className="card stat"><strong><CountUp to={n} duration={1.6} /></strong><span className="muted">{label}</span></div>
        ))}
        <div className="card stat"><strong><CountUp to={tracks.length} duration={1.6} /></strong><span className="muted">Lagu favorit</span></div>
      </div>
    </Section>
  );
}
