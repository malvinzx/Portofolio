import { ClickSpark } from '@/components/reactbits';
import Header from '@/components/Header';
import MobileDock from '@/components/MobileDock';
import { ThemeProvider, useTheme } from '@/theme/ThemeProvider';
import Hero from '@/sections/Hero';
import Band from '@/sections/Band';
import Profile from '@/sections/Profile';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Gallery from '@/sections/Gallery';
import Music from '@/sections/Music';
import Contact from '@/sections/Contact';

function Shell() {
  const { meta } = useTheme();
  return (
    <ClickSpark sparkColor={meta.accent} shape="star" sparkCount={10} sparkRadius={34} style={{ height: 'auto' }}>
      <Header />
      <main>
        <Hero /><Band /><Profile /><About /><Skills /><Projects /><Gallery /><Music /><Contact />
      </main>
      <footer className="foot wrap">© {new Date().getFullYear()} Malvin — Portfolio &amp; Digital Services</footer>
      <MobileDock />
    </ClickSpark>
  );
}

export default function App() {
  return <ThemeProvider><Shell /></ThemeProvider>;
}
