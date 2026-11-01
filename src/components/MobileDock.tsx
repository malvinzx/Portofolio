import type { ComponentProps } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { CodeIcon, Folder01Icon, Home01Icon, Mail01Icon, MusicNote03Icon } from '@hugeicons/core-free-icons';
import { Dock } from '@/components/reactbits';
import { useTheme } from '@/theme/ThemeProvider';

const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
type IconData = ComponentProps<typeof HugeiconsIcon>['icon'];
const glyph = (icon: IconData) => <HugeiconsIcon icon={icon} size="1em" strokeWidth={1.8} />;

/** Navigasi cepat di bawah layar; hanya tampil di layar kecil (lihat .dock-layer di layout.css). */
export default function MobileDock() {
  const { meta } = useTheme();
  const items = [
    { icon: glyph(Home01Icon), label: 'Home', onClick: go('home') },
    { icon: glyph(CodeIcon), label: 'Skill', onClick: go('skill') },
    { icon: glyph(Folder01Icon), label: 'Project', onClick: go('project') },
    { icon: glyph(MusicNote03Icon), label: 'Musik', onClick: go('musik') },
    { icon: glyph(Mail01Icon), label: 'Sosmed', onClick: go('sosmed') }
  ];
  return (
    <div className="dock-layer">
      <Dock items={items} theme={meta.dark ? 'dark' : 'light'} accentColor={meta.accent} baseItemSize={44} magnification={54} panelHeight={60} gap={8}
        style={{ bottom: 'calc(12px + env(safe-area-inset-bottom, 0px))' }} />
    </div>
  );
}
