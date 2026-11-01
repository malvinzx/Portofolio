import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { THEMES, THEME_IDS, type ThemeId } from './themes';

type Ctx = { theme: ThemeId; setTheme: (t: ThemeId) => void; meta: (typeof THEMES)[ThemeId] };
const ThemeCtx = createContext<Ctx>(null as unknown as Ctx);
export const useTheme = () => useContext(ThemeCtx);

const read = (): ThemeId => {
  try {
    const v = localStorage.getItem('theme') as ThemeId;
    return THEME_IDS.includes(v) ? v : 'minimal';
  } catch {
    return 'minimal';
  }
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(read);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* abaikan */ }
  }, [theme]);
  return <ThemeCtx.Provider value={{ theme, setTheme: setThemeState, meta: THEMES[theme] }}>{children}</ThemeCtx.Provider>;
}
