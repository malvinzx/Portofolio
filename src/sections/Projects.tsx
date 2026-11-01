import Section from '@/components/Section';
import { ScrollStack, ScrollStackItem } from '@/components/reactbits';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <Section id="project" title="Project">
      <ScrollStack useWindowScroll smoothScroll={false} stackPosition="18%" itemDistance={70} itemStackDistance={18} baseScale={0.88} itemScale={0.04} holdDistance={120}>
        {projects.map((p) => (
          <ScrollStackItem key={p.title} itemClassName="proj-card">
            <span className="proj-tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p className="muted">{p.desc}</p>
            {p.link && <a className="btn btn-primary" href={p.link} target="_blank" rel="noreferrer">Buka project</a>}
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </Section>
  );
}
