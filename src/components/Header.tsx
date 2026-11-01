import { useEffect, useState } from 'react';
import { PillNav } from '@/components/reactbits';
import { useTheme } from '@/theme/ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';

export const NAV = [['home', 'Home'], ['profile', 'Profile'], ['about', 'About'], ['skill', 'Skill'], ['project', 'Project'], ['galeri', 'Galeri'], ['musik', 'Musik'], ['sosmed', 'Sosmed']];
const ITEMS = NAV.map(([id, label]) => ({ label, href: `#${id}` }));

export default function Header() {
  const { meta } = useTheme();
  const [active, setActive] = useState('#home');

  // Tandai section yang sedang terlihat sebagai menu aktif
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <header className="top">
      <div className="wrap">
        <div className="nav-wrap">
          <PillNav
            logo={<span className="logo-mark">M</span>} logoAlt="Malvin" logoHref="#home"
            items={ITEMS} activeHref={active}
            theme={meta.dark ? 'dark' : 'light'} itemStyle="plain" hoverEffect="fill" indicator="dot"
            barColor="var(--card)" textColor="var(--fg)" highlightColor={meta.accent} ariaLabel="Navigasi utama"
          />
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
