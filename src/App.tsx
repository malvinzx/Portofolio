import { useState } from 'react';
import { ClickSpark } from '@/components/reactbits';
import Header from '@/components/Header';
import MobileDock from '@/components/MobileDock';
import Loader from '@/components/Loader';
import ErrorBoundary from '@/components/ErrorBoundary';
import { NetworkToast, ScrollProgress } from '@/components/Extras';
import { SfxProvider } from '@/components/SfxProvider';
import { ThemeProvider, useTheme } from '@/theme/ThemeProvider';
import NotFound from '@/pages/NotFound';
import Hero from '@/sections/Hero';
import Band from '@/sections/Band';
import Profile from '@/sections/Profile';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Gallery from '@/sections/Gallery';
import Music from '@/sections/Music';
import Contact from '@/sections/Contact';

function Spark({ children }: { children: React.ReactNode }) {
  const { meta } = useTheme();
  return <ClickSpark sparkColor={meta.accent} shape="star" sparkCount={10} sparkRadius={34} style={{ height: 'auto' }}>{children}</ClickSpark>;
}

function Home() {
  const [mounted, setMounted] = useState(false); // konten dipasang saat loader mulai keluar
  const [done, setDone] = useState(false);
  return (
    <>
      {!done && <Loader onLeave={() => setMounted(true)} onDone={() => setDone(true)} />}
      {mounted && (
        <Spark>
          <ScrollProgress />
          <Header />
          <main>
            <Hero /><Band /><Profile /><About /><Skills /><Projects /><Gallery /><Music /><Contact />
          </main>
          <footer className="foot wrap">© {new Date().getFullYear()} Malvin — Portfolio &amp; Digital Services</footer>
          <MobileDock />
          <NetworkToast />
        </Spark>
      )}
    </>
  );
}

const isHome = () => ['/', '/index.html'].includes(location.pathname);

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <SfxProvider>
          {isHome() ? <Home /> : <Spark><NotFound /></Spark>}
        </SfxProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
