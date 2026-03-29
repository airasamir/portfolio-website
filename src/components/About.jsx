import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section fade-in">
      <div className="container about-container">
        <div className="about-left">
          <img 
            src="/assets/page6_img0.jpeg" 
            alt="Expression and Emotion" 
            className="about-image" 
          />
        </div>
        <div className="about-right">
          <span className="text-label">ABOUT</span>
          <h2 className="title-large serif about-title">
            Expression <em>Through Pen</em>
          </h2>
          
          <div className="about-bio">
            <p>
              I specialize in acrylics on canvas and abstract concepts through my pointer. 
              While trained in different mediums, I found a deep connection to traditional paintings.
            </p>
            <p>
              I love how art communicates so much of the creator to the audience. Ironically, 
              this communication feels easier and is the best portrayal of myself as well.
            </p>
            <p className="architect-bio">
              As an Architect graduating with the <strong>Highest CGPA</strong> from National College of Arts (NCA), Lahore, 
              I am passionate about conceptual design, architectural visualization, and spatial storytelling 
              through both digital tools and traditional artistic methods.
            </p>
          </div>
          
          <blockquote className="about-quote serif">
            "Everything is emotion. To have someone else feel the same as I do is a tiny miracle."
          </blockquote>
          
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-title serif">Multi</span>
              <span className="text-label">MEDIUM</span>
            </div>
            <div className="detail-item">
              <span className="detail-title serif">Fine Art</span>
              <span className="text-label">FOCUS</span>
            </div>
            <div className="detail-item">
              <span className="detail-title serif">Lahore</span>
              <span className="text-label">BASED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
