import React from 'react';
import './HeroWorks.css';

const works = [
  { id: 1, img: '/assets/page1_img0.jpeg', title: 'Calligraphy', medium: 'Pen & Ink' },
  { id: 2, img: '/assets/page2_img0.jpeg', title: 'The Shades', medium: 'Acrylics on Canvas' },
  { id: 3, img: '/assets/page3_img0.jpeg', title: 'Lahore', medium: 'Water Colors' },
  { id: 4, img: '/assets/page3_img1.jpeg', title: 'Moment', medium: 'Pointers' },
  { id: 5, img: '/assets/page3_img2.jpeg', title: 'Festivity', medium: 'Water Colors' },
  { id: 6, img: '/assets/page4_img0.jpeg', title: 'Untitled', medium: 'Copic Markers' },
  { id: 7, img: '/assets/page4_img1.jpeg', title: 'Shahi', medium: 'Acrylics on Canvas' },
  { id: 8, img: '/assets/page4_img2.jpeg', title: 'Blossom', medium: 'Acrylics on Canvas' },
  { id: 9, img: '/assets/page5_img0.jpeg', title: 'Untitled', medium: 'Pastel Pencils' },
  { id: 10, img: '/assets/page5_img1.jpeg', title: 'Calligraphy 2', medium: 'Ink' },
  { id: 11, img: '/assets/page6_img0.jpeg', title: 'Kashmir Siege', medium: 'Pastel Pencils' },
  { id: 12, img: '/assets/page7_img0.jpeg', title: 'Color Series', medium: 'Pointers' },
  { id: 13, img: '/assets/page7_img1.jpeg', title: 'Untitled', medium: 'Soft Pastels' },
  { id: 14, img: '/assets/page7_img2.jpeg', title: 'Untitled', medium: 'Pastel Pencils' },
  { id: 15, img: '/assets/page8_img0.jpeg', title: 'Vintage Essentials', medium: 'Soft Pastels' },
  { id: 16, img: '/assets/page8_img1.jpeg', title: 'Roarrrrrr!!!!', medium: 'Acrylics on Canvas' },
  { id: 17, img: '/assets/page8_img2.jpeg', title: 'Untitled', medium: 'Pastel Pencils' },
  { id: 18, img: '/assets/page9_img0.jpeg', title: 'Criminals Most Wanted', medium: 'Graphite' },
  { id: 19, img: '/assets/page9_img1.jpeg', title: 'Untitled', medium: 'Charcoal' },
  { id: 20, img: '/assets/page10_img0.jpeg', title: 'Captain Jack Sparrow', medium: 'Soft Pastels' },
  { id: 21, img: '/assets/page10_img1.jpeg', title: 'Horse', medium: 'Soft Pastels' },
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
