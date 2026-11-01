/** Ganti file di public/gallery/ (atau ubah src) dengan foto kamu. */
export const gallery = [1, 2, 3, 4, 5, 6].map((n) => ({ src: `/gallery/g${n}.png`, alt: `Foto ${n}`, title: `Foto ${n}`, subtitle: 'Galeri' }));
