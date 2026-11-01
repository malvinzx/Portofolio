/** Efek suara disintesis dengan WebAudio (tanpa file audio). Aktif setelah interaksi pertama pengguna. */
type Tone = { f: number; to?: number; t?: number; d: number; type?: OscillatorType; v?: number };

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let muted = false;
let lastHover = 0;
try { muted = localStorage.getItem('sfx-muted') === '1'; } catch { /* abaikan */ }

const ensure = () => {
  if (!ctx) {
    const C = window.AudioContext || (window as any).webkitAudioContext;
    if (!C) return null;
    ctx = new C();
    master = ctx!.createGain();
    master.gain.value = 0.5;
    master.connect(ctx!.destination);
  }
  if (ctx!.state === 'suspended') void ctx!.resume();
  return ctx;
};

const tone = ({ f, to, t = 0, d, type = 'sine', v = 0.2 }: Tone) => {
  if (muted) return;
  const c = ensure();
  if (!c || !master) return;
  const s = c.currentTime + t;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(f, s);
  if (to) osc.frequency.exponentialRampToValueAtTime(to, s + d);
  g.gain.setValueAtTime(0.0001, s);
  g.gain.exponentialRampToValueAtTime(v, s + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, s + d);
  osc.connect(g).connect(master);
  osc.start(s);
  osc.stop(s + d + 0.03);
};

export const sfx = {
  unlock: () => { ensure(); },
  isMuted: () => muted,
  setMuted: (m: boolean) => { muted = m; try { localStorage.setItem('sfx-muted', m ? '1' : '0'); } catch { /* abaikan */ } },
  tap: () => tone({ f: 700, to: 500, d: 0.05, v: 0.06 }),
  click: () => tone({ f: 520, to: 300, d: 0.09, type: 'triangle', v: 0.22 }),
  hover: () => {
    const n = performance.now();
    if (n - lastHover < 70) return;
    lastHover = n;
    tone({ f: 900, d: 0.035, v: 0.04 });
  },
  whoosh: () => { tone({ f: 180, to: 1300, d: 0.28, v: 0.09 }); tone({ f: 320, to: 1800, t: 0.04, d: 0.22, v: 0.05 }); },
  theme: () => { tone({ f: 300, to: 900, d: 0.22, type: 'sawtooth', v: 0.06 }); tone({ f: 600, to: 1400, t: 0.05, d: 0.2, v: 0.08 }); },
  success: () => [523, 659, 784].forEach((f, i) => tone({ f, t: i * 0.08, d: 0.18, type: 'triangle', v: 0.14 })),
  error: () => { tone({ f: 240, to: 110, d: 0.3, type: 'square', v: 0.07 }); tone({ f: 200, to: 90, t: 0.14, d: 0.3, type: 'square', v: 0.07 }); },
  enter: () => [392, 523, 659, 784].forEach((f, i) => tone({ f, t: i * 0.07, d: 0.3, type: 'triangle', v: 0.13 }))
};
