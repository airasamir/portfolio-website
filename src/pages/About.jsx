import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section fade-in">
      <div className="container about-container">
        <div className="about-left">
          <div className="about-featured-label">Featured — Art</div>
          <h3 className="about-featured-title serif">Untitled</h3>
          <p className="about-featured-meta">Graphite · 21 × 25 in</p>
          <div className="about-image-frame">
            <img
              src="/assets/art/page9_img0.jpeg"
              alt="Untitled — graphite on paper"
              className="about-image"
            />
          </div>
        </div>
        <div className="about-right">
          <span className="text-label">About Airas Amir</span>
          <h2 className="title-large serif about-title">
            Expression <em>Through Pen</em>
          </h2>

          <div className="about-bio">
            <p className="architect-bio">
              As an Architect graduating with the <strong>Highest CGPA</strong> from National College of Arts (NCA),
              Lahore, I am passionate about conceptual design, architectural visualization, and spatial storytelling
              through both digital tools and traditional artistic methods.
            </p>
            <p>
              My work moves between civic research, architectural representation, and fine art. In architecture, I am
              interested in people-centered public space, urban research, and visual communication. In art, I work
              across acrylic, pastel, graphite, and hand-drawn studies.
            </p>
            <p>
              I love how art communicates so much of the creator to the audience. Ironically, this communication feels
              easier and remains the clearest portrayal of myself as well.
            </p>
          </div>

          <blockquote className="about-quote serif">
            &ldquo;Everything is emotion. To have someone else feel the same as I do is a tiny miracle.&rdquo;
          </blockquote>

          <div className="about-details">
            <div className="detail-item">
              <span className="detail-title serif">Multi</span>
              <span className="text-label">Medium</span>
            </div>
            <div className="detail-item">
              <span className="detail-title serif">B.Arch</span>
              <span className="text-label">Highest CGPA</span>
            </div>
            <div className="detail-item">
              <span className="detail-title serif">Lahore</span>
              <span className="text-label">Based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
