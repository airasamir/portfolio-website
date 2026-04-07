import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page fade-in">
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="text-label">Airas Amir</span>
            <h1 className="home-title serif">Architecture, art, and spatial storytelling.</h1>
            <p className="home-intro">
              A portfolio built around two parallel practices: a process-led architectural body of work and an art
              practice rooted in drawing, pastel, acrylic, and expression through line.
            </p>
            <div className="home-actions">
              <Link to="/architecture" className="home-btn primary-btn">
                Explore Architecture
              </Link>
              <Link to="/art" className="home-btn secondary-btn">
                View Art
              </Link>
            </div>
          </div>

          <div className="home-hero-panel">
            <div className="home-panel-card">
              <span className="home-panel-label">Featured thesis</span>
              <h2 className="serif">Reclaiming Our City: Stitching Town Hall into Public Realm</h2>
              <p>
                Reimagining Lahore Town Hall as a decolonized civic platform through four design strategies —
                Ground:0, Perch, Forum, and Edge — that transform a fragmented site into continuous public realm.
              </p>
            </div>
            <div className="home-panel-grid">
              <Link to="/architecture" className="home-panel-tile architecture-tile">
                <span>Architecture</span>
              </Link>
              <Link to="/art" className="home-panel-tile art-tile">
                <span>Art</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-sections">
        <div className="container">
          <div className="section-grid">
            <article className="section-card architecture-card">
              <span className="text-label">Architecture</span>
              <h2 className="serif">Process before product.</h2>
              <p>
                The architecture section presents Reclaiming Our City — from user analysis and zoning through
                four design strategies, master plan, and sectional resolution.
              </p>
              <Link to="/architecture" className="section-link">
                Enter architecture
              </Link>
            </article>

            <article className="section-card art-card">
              <span className="text-label">Art</span>
              <h2 className="serif">A gallery-led portfolio.</h2>
              <p>
                The art section preserves the rhythm of the live portfolio, bringing together paintings, pastel work,
                graphite studies, and personal statements around expression.
              </p>
              <Link to="/art" className="section-link">
                Enter art
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="home-summary">
        <div className="container home-summary-grid">
          <div>
            <span className="text-label">About</span>
            <h2 className="serif">Architect, artist, researcher.</h2>
            <p>
              Airas Amir graduated from the National College of Arts, Lahore, with the highest CGPA in the B.Arch
              department. Her work moves between civic research, visual communication, and material expression.
            </p>
          </div>
          <div className="home-summary-links">
            <Link to="/about" className="summary-link">
              Read profile
            </Link>
            <Link to="/contact" className="summary-link">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
