import ThemeSwitcher from './ThemeSwitcher';

const links = [['profile', 'Profile'], ['about', 'About'], ['skill', 'Skill'], ['project', 'Project'], ['galeri', 'Galeri'], ['musik', 'Musik'], ['sosmed', 'Sosmed']];

export default function Header() {
  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="#home">Malvin</a>
        <nav className="nav" aria-label="Navigasi utama">
          {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
