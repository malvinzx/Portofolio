import { JellyRadio } from '@/components/reactbits';
import { useTheme } from '@/theme/ThemeProvider';
import { THEMES, THEME_IDS, type ThemeId } from '@/theme/themes';

export default function ThemeSwitcher() {
  const { theme, setTheme, meta } = useTheme();
  return (
    <div className="theme-switch" aria-label="Pilih tema">
      <JellyRadio
        items={THEME_IDS.map((id) => ({ value: id, label: THEMES[id].label }))}
        value={theme}
        onChange={(v: string) => setTheme(v as ThemeId)}
        size="md"
        chipColor={meta.chip}
        activeColor={meta.accent}
        textColor={meta.chipText}
        activeTextColor={meta.onAccent}
      />
    </div>
  );
}
