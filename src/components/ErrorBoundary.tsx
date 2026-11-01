import { Component, type ReactNode } from 'react';
import { sfx } from '@/lib/sfx';

/** Menangkap error render supaya pengunjung tidak melihat layar putih. */
export default class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: unknown) { console.error(error); sfx.error(); }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="nf">
        <div className="wrap">
          <h1 className="nf-title">Ups, ada yang error</h1>
          <p className="muted nf-path">Terjadi kesalahan saat menampilkan halaman ini.</p>
          <div className="btns nf-btns"><button className="btn btn-primary" onClick={() => location.reload()}>Muat ulang</button></div>
        </div>
      </main>
    );
  }
}
