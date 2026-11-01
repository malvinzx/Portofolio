export type ThemeId = 'minimal' | 'neo' | 'glass' | 'ink';

/** Warna untuk komponen React Bits yang butuh nilai JS (CSS variable tidak bisa dipakai di canvas/props). */
export const THEMES: Record<ThemeId, { label: string; accent: string; onAccent: string; chip: string; chipText: string; dark: boolean }> = {
  minimal: { label: 'Minimal', accent: '#1f1f1f', onAccent: '#ffffff', chip: '#e6e6e2', chipText: '#141414', dark: false },
  neo: { label: 'Neo', accent: '#ffd60a', onAccent: '#000000', chip: '#ffffff', chipText: '#000000', dark: false },
  glass: { label: 'Glass', accent: '#6ee7d0', onAccent: '#04221c', chip: 'rgba(255,255,255,0.12)', chipText: '#eaf6ff', dark: true },
  ink: { label: 'Ink', accent: '#c8ff3d', onAccent: '#0b0b0c', chip: '#1c1c1f', chipText: '#f2f2f0', dark: true }
};
export const THEME_IDS = Object.keys(THEMES) as ThemeId[];
