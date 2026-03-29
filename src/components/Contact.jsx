import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section text-center fade-in">
      <div className="container">
        <span className="text-label">GET IN TOUCH</span>
        <h2 className="title-large contact-title">Let's Connect</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <span className="contact-label text-label">EMAIL</span>
            <a href="mailto:airasamir@gmail.com" className="contact-link">AIRASAMIR@GMAIL.COM</a>
          </div>
          <div className="contact-item">
            <span className="contact-label text-label">INSTAGRAM</span>
            <a href="https://www.instagram.com/amirairas/" target="_blank" rel="noopener noreferrer" className="contact-link">@AMIRAIRAS</a>
          </div>
        </div>
      </div>
    </section>
  );
}
