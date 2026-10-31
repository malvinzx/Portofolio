import Section from '@/components/Section';
import { LogoLoop } from '@/components/reactbits';
import { profile } from '@/data/profile';

const chips = (list: string[]) => list.map((s) => ({ node: <span className="skill-chip">{s}</span>, title: s }));
const groups: [string, string[]][] = [['Design', profile.design], ['Database & Backend', profile.backend], ['Expertise', profile.other], ['Tools', profile.tools]];

export default function Skills() {
  return (
    <Section id="skill" title="Skill">
      <div className="skill-rows">
        <LogoLoop logos={chips(profile.languages)} speed={55} logoHeight={30} gap={14} hoverSpeed={0} ariaLabel="Bahasa pemrograman" />
        <LogoLoop logos={chips(profile.frameworks)} speed={55} direction="right" logoHeight={30} gap={14} hoverSpeed={0} ariaLabel="Framework dan library" />
      </div>
      <div className="skill-groups">
        {groups.map(([title, list]) => (
          <div key={title} className="card"><h3>{title}</h3><ul className="tags">{list.map((s) => <li key={s}>{s}</li>)}</ul></div>
        ))}
      </div>
    </Section>
  );
}
