import React, { useState, useCallback, useEffect } from 'react';
import './ProjectCarousel.css';

export default function ProjectCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const len = slides.length;

  const go = useCallback(
    (delta) => {
      setIndex((i) => (i + delta + len) % len);
    },
    [len]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  return (
    <div className="project-carousel" role="region" aria-roledescription="carousel" aria-label="Other projects">
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <article key={slide.id} className="carousel-slide" aria-hidden={i !== index}>
              <div className="carousel-slide-image">
                <img src={slide.img} alt={slide.alt || slide.title} loading={i === 0 ? 'eager' : 'lazy'} />
              </div>
              <div className="carousel-slide-copy">
                {slide.kicker ? <span className="carousel-kicker">{slide.kicker}</span> : null}
                <h3>{slide.title}</h3>
                {slide.caption ? <p className="carousel-caption">{slide.caption}</p> : null}
                <p>{slide.body}</p>
                {slide.meta ? <span className="carousel-meta">{slide.meta}</span> : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button type="button" className="carousel-btn" onClick={() => go(-1)} aria-label="Previous slide">
          ‹
        </button>
        <div className="carousel-dots" role="tablist">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`carousel-dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}: ${slide.title}`}
            />
          ))}
        </div>
        <button type="button" className="carousel-btn" onClick={() => go(1)} aria-label="Next slide">
          ›
        </button>
      </div>
    </div>
  );
}
