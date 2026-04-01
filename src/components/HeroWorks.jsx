import React from 'react';
import './HeroWorks.css';

const works = [
  { id: 1, img: '/assets/art/page1_img0.jpeg', title: 'Calligraphy', medium: 'Water Colors & Ink' },
  { id: 2, img: '/assets/art/page2_img0.jpeg', title: 'The Shades', medium: 'Ink' },
  { id: 3, img: '/assets/art/page3_img0.jpeg', title: 'Distortion', medium: 'Pointers' },
  { id: 4, img: '/assets/art/page3_img1.jpeg', title: 'Lahore', medium: 'Watercolors' },
  { id: 5, img: '/assets/art/page3_img2.jpeg', title: 'Moment', medium: 'Pointers' },
  { id: 6, img: '/assets/art/page4_img0.jpeg', title: 'Untitled', medium: 'Copic Markers' },
  { id: 7, img: '/assets/art/page4_img1.jpeg', title: 'Blossom', medium: 'Acrylics on Canvas' },
  { id: 8, img: '/assets/art/page4_img2.jpeg', title: 'Shahi', medium: 'Acrylics on Canvas' },
  { id: 9, img: '/assets/art/page5_img0.jpeg', title: 'Untitled', medium: 'Pastel Pencils' },
  { id: 10, img: '/assets/art/page5_img1.jpeg', title: 'Calligraphy', medium: 'Water Colors' },
  { id: 11, img: '/assets/art/page6_img0.jpeg', title: 'Kashmir Siege', medium: 'Pastel Pencils' },
  { id: 12, img: '/assets/art/page7_img0.jpeg', title: 'Color Series', medium: 'Pointers' },
  { id: 13, img: '/assets/art/page7_img1.jpeg', title: 'Untitled', medium: 'Soft Pastels' },
  { id: 14, img: '/assets/art/page7_img2.jpeg', title: 'Untitled', medium: 'Pastel Pencils' },
  { id: 15, img: '/assets/art/page8_img0.jpeg', title: 'Vintage Essentials', medium: 'Soft Pastels' },
  { id: 16, img: '/assets/art/page8_img1.jpeg', title: 'Roarrrrrr!!!!', medium: 'Pastel Pencils' },
  { id: 17, img: '/assets/art/page8_img2.jpeg', title: 'Untitled', medium: 'Soft Pastels' },
  { id: 18, img: '/assets/art/page9_img0.jpeg', title: 'Untitled', medium: 'Graphite' },
  { id: 19, img: '/assets/art/page9_img1.jpeg', title: 'Criminals Most Wanted', medium: 'Charcoal' },
  { id: 20, img: '/assets/art/page10_img0.jpeg', title: 'Horse', medium: 'Soft Pastels' },
  { id: 21, img: '/assets/art/page10_img1.jpeg', title: 'Captain Jack Sparrow', medium: 'Soft Pastels' },
];

export default function HeroWorks() {
  return (
    <section id="works" className="section works-section fade-in">
      <div className="container">
        <div className="masonry-grid">
          {works.map((work) => (
            <div key={work.id} className="work-item">
              <div className="work-image-container">
                <img src={work.img} alt={work.title} className="work-image" loading="lazy" />
              </div>
              <div className="work-info">
                <h3 className="work-title serif">{work.title}</h3>
                <p className="work-medium">{work.medium}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
