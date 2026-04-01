import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section fade-in">
      <div className="container contact-container">
        <div className="contact-meta">
          <span className="text-label">GET IN TOUCH</span>
          <h2 className="title-large serif contact-title">
            Let's <em>Connect</em>
          </h2>
          <p className="contact-subtitle">
            Open for collaborations, architectural projects, and fine art commissions.
          </p>
        </div>
        
        <div className="contact-info">
          <ul className="contact-list">
            <li>
              <span className="serif">Email</span>
              <a href="mailto:airasamir26@gmail.com">airasamir26@gmail.com</a>
            </li>
            <li>
              <span className="serif">Instagram</span>
              <a href="https://www.instagram.com/airasamir/" target="_blank" rel="noopener noreferrer">
                @airasamir
              </a>
            </li>
            <li>
              <span className="serif">LinkedIn</span>
              <a href="https://www.linkedin.com/in/airasamir" target="_blank" rel="noopener noreferrer">
                LinkedIn profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
