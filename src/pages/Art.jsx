import React from 'react';
import './Art.css';

const artworks = [
  { id: 1, title: 'Calligraphy', medium: 'Water Colors & Ink', dims: '20 x 17', img: '/assets/art/page1_img0.jpeg' },
  { id: 2, title: 'The Shades', medium: 'Ink', dims: '18 x 12', img: '/assets/art/page2_img0.jpeg' },
  { id: 3, title: 'Distortion', medium: 'Pointers', dims: '12 x 12', img: '/assets/art/page3_img0.jpeg' },
  { id: 4, title: 'Lahore', medium: 'Watercolors', dims: '12 x 12', img: '/assets/art/page3_img1.jpeg' },
  { id: 5, title: 'Moment', medium: 'Pointers', dims: '12 x 12', img: '/assets/art/page3_img2.jpeg' },
  { id: 6, title: 'Untitled', medium: 'Copic Markers', dims: '17 x 13', img: '/assets/art/page4_img0.jpeg' },
  { id: 7, title: 'Blossom', medium: 'Acrylics on Canvas', dims: '18 x 18', img: '/assets/art/page4_img1.jpeg' },
  { id: 8, title: 'Shahi', medium: 'Acrylics on Canvas', dims: '60 x 48', img: '/assets/art/page4_img2.jpeg' },
  { id: 9, title: 'Untitled', medium: 'Pastel Pencils', dims: '24 x 18', img: '/assets/art/page5_img0.jpeg' },
  { id: 10, title: 'Calligraphy', medium: 'Water Colors', dims: '18 x 24', img: '/assets/art/page5_img1.jpeg' },
  { id: 11, title: 'Kashmir Siege', medium: 'Pastel Pencils', dims: '18 x 24', img: '/assets/art/page6_img0.jpeg' },
  { id: 12, title: 'Color Series', medium: 'Pointers', dims: '11 x 17', img: '/assets/art/page7_img0.jpeg' },
  { id: 13, title: 'Untitled', medium: 'Soft Pastels', dims: '18 x 24', img: '/assets/art/page7_img1.jpeg' },
  { id: 14, title: 'Untitled', medium: 'Pastel Pencils', dims: '11 x 17', img: '/assets/art/page7_img2.jpeg' },
  { id: 15, title: 'Vintage Essentials', medium: 'Soft Pastels', dims: '24 x 18', img: '/assets/art/page8_img0.jpeg' },
  { id: 16, title: 'Roarrrrrr!!!!', medium: 'Pastel Pencils', dims: '12 x 12', img: '/assets/art/page8_img1.jpeg' },
  { id: 17, title: 'Untitled', medium: 'Soft Pastels', dims: '18 x 24', img: '/assets/art/page8_img2.jpeg' },
  { id: 18, title: 'Untitled', medium: 'Graphite', dims: '21 x 25', img: '/assets/art/page9_img0.jpeg' },
  { id: 19, title: 'Criminals Most Wanted', medium: 'Charcoal', dims: '11 x 17', img: '/assets/art/page9_img1.jpeg' },
  { id: 20, title: 'Horse', medium: 'Soft Pastels', dims: '18 x 24', img: '/assets/art/page10_img0.jpeg' },
  { id: 21, title: 'Captain Jack Sparrow', medium: 'Soft Pastels', dims: '20 x 22', img: '/assets/art/page10_img1.jpeg' },
];

export default function Art() {
  return (
    <section className="art-page">
      <div className="container">
        <header className="art-hero">
          <div className="art-hero-copy">
            <span className="text-label">Art portfolio</span>
            <h1 className="hero-title">Expression through pen, pastel, and paint.</h1>
            <p className="hero-subtitle">
              The live portfolio is preserved here as a gallery-led body of work: paintings, calligraphy, graphite
              studies, and pastel pieces collected as a continuous visual practice alongside architecture.
            </p>
          </div>

          <aside className="art-statement">
            <p className="art-quote serif">
              &ldquo;Everything is emotion. To have someone else feel the same as I do is a tiny miracle.&rdquo;
            </p>
            <p>
              Traditional media remain central to the work: acrylic on canvas, soft pastel, pastel pencils, graphite,
              water color, and hand-drawn studies.
            </p>
          </aside>
        </header>

        <section className="art-gallery-intro">
          <div>
            <span className="text-label">Selected works</span>
            <h2 className="serif">A live gallery, reorganized as its own page.</h2>
          </div>
          <p>
            The sequence below keeps the spirit of the current live site while giving the art practice its own place in
            a multi-page portfolio.
          </p>
        </section>

        <div className="gallery-grid" aria-label="Artworks gallery">
          {artworks.map((art) => (
            <div key={art.id} className="gallery-item">
              <div className="art-image-container">
                <img src={art.img} alt={`${art.title} by Airas Amir`} className="art-img" loading="lazy" />
              </div>
              <div className="art-details">
                <h3 className="art-title">{art.title}</h3>
                <p className="art-medium">{art.medium}</p>
                <p className="art-dims">{art.dims}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
