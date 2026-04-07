import React, { useState, useCallback, useEffect } from 'react';
import './Architecture.css';

const IMG = '/assets/architecture/reclaiming';
const SPACE_IMG = `${IMG}/experience of the space`;

const thesisHighlights = [
  {
    title: 'Strength over power',
    body:
      'The project reframes civic space through a power-versus-strength argument — replacing bureaucratic control and spatial opacity with collective participation, accountability, and public visibility.',
  },
  {
    title: 'Ground Zero',
    body:
      'Ground Zero is a public plaza as focal point, positioned at the administrative axis. The site is divided into two halves, each addressing the road periphery and reconnecting the civic centre.',
  },
  {
    title: 'Design strategies',
    body:
      'Four spatial strategies — Ground:0, Perch, Forum, and Edge — organise the intervention into a layered civic surface of plazas, vistas, gathering enclosures, and interaction corridors.',
  },
];

const siteFeatures = [
  {
    title: 'Tree House',
    body: 'This area has trees more than 100 years old, amalgamating experience and history in a moment of pause. The tree house also acts as a place and perch.',
  },
  {
    title: 'One Window',
    body: 'Provision of one-window operation and drive-through lane supports and facilitates users on the go.',
  },
  {
    title: 'Pedestrian Connectivity',
    body: 'Underground channel connecting Nasir Bagh and Town Hall becomes a prominent node on site, ensuring smooth user flow.',
  },
  {
    title: 'Chaye Khana',
    body: 'Rooftop Chaye Khana acts as an incentive to pedestrian flows of the perch, maximizing footfall.',
  },
  {
    title: 'Interactive Pathway',
    body: 'Use of materials and surfaces to create active spaces where the floor acts as a street canvas.',
  },
  {
    title: 'Pond',
    body: 'Convergence of all pedestrian routes at the pond provides a central open space with serenity of water, acting as a pivot for all forums and diverse activities around its edges.',
  },
  {
    title: 'Quiet Zone',
    body: 'Contoured green platforms in the foliage of trees provide an introverted space of escape from the dominant programs of the site.',
  },
  {
    title: 'Food Stalls',
    body: 'Vendor points and food stalls along the edge act as a feeder to maintain activity, additionally becoming a user hotspot around Ground Zero.',
  },
];

const experienceImages = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  src: `${SPACE_IMG}/${i + 1}.png`,
  alt: `Experience of the space — visual ${i + 1}`,
}));

function VisualCarousel({ images, label }) {
  const [index, setIndex] = useState(0);
  const len = images.length;

  const go = useCallback(
    (delta) => setIndex((i) => (i + delta + len) % len),
    [len],
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
    <div className="visual-carousel" role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="carousel-viewport">
        <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {images.map((img, i) => (
            <div key={img.id} className="carousel-slide" aria-hidden={i !== index}>
              <img src={img.src} alt={img.alt} loading={i === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-controls">
        <button type="button" className="carousel-btn" onClick={() => go(-1)} aria-label="Previous">&#8249;</button>
        <div className="carousel-dots" role="tablist">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={`carousel-dot${i === index ? ' active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
        <button type="button" className="carousel-btn" onClick={() => go(1)} aria-label="Next">&#8250;</button>
      </div>
    </div>
  );
}

export default function Architecture() {
  return (
    <section className="architecture-page">
      <div className="container">

        {/* ── Hero ── */}
        <header className="page-header arch-hero">
          <div className="arch-hero-copy">
            <span className="text-label">Architecture thesis</span>
            <h2 className="hero-title serif">Reclaiming Our City: Stitching Town Hall into Public Realm</h2>
            <p className="arch-hero-body">
              This thesis reimagines Town Hall Lahore as a decolonized civic platform. The project is organised
              around four design strategies — Ground:0, Perch, Forum, and Edge — that transform a fragmented
              colonial site into a continuous, participatory public realm.
            </p>
          </div>
          <div className="hero-cover-wrap">
            <img
              src={`${IMG}/design_strategies_3d.png`}
              alt="Design strategies aerial view — Reclaiming Our City"
              className="hero-cover-image"
            />
          </div>
        </header>

        <section className="arch-highlight-row">
          {thesisHighlights.map((item) => (
            <article key={item.title} className="arch-highlight-card">
              <h2 className="serif">{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </section>

        <article className="project-content">

          {/* ── User categories ── */}
          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">User categories</span>
              <h2 className="diagram-sections-title serif">Who uses the site, and how?</h2>
              <p className="diagram-sections-lead">
                Two user categories frame the design: existing institutional users (employees, officers, citizens
                seeking documents) and the wider public (students, civil society, explorers, children). The
                intervention bridges both.
              </p>
            </div>
            <figure className="diagram-figure">
              <img src={`${IMG}/user_categories.png`} alt="User Category 1 and User Category 2 analysis" loading="lazy" />
            </figure>
          </section>

          {/* ── Zoning diagram ── */}
          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">Zoning</span>
              <h2 className="diagram-sections-title serif">Zoning diagram</h2>
              <p className="diagram-sections-lead">
                Identifying the major potential spots for interventions and locating the four spaces of expression
                on site — Ground 0, Perch, Forum, and Edge. Additional programs from existing site features
                (Khidmat Markaz, Mosque, informal vendors, barracks) are layered in to form the initial
                site configuration.
              </p>
            </div>
            <figure className="diagram-figure">
              <img src={`${IMG}/zoning_diagram.png`} alt="Zoning diagram — locating interventions on site" loading="lazy" />
            </figure>
          </section>

          {/* ── Form development ── */}
          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">Form</span>
              <h2 className="diagram-sections-title serif">Form development</h2>
              <p className="diagram-sections-lead">
                Accessibility maps locate four access points to the site — main entrance through Town Hall,
                main bus stop, secondary artery at the university node, and a drive-thru one-window access.
                Interventions on site identify the spatial programs (Ground 0, Perch, Forums, Edges), and
                the datum technique moves platforms, plazas, and sunken courtyards along with ramps and
                pathways to create polyvalent public spaces visible in line of sight.
              </p>
            </div>
            <figure className="diagram-figure">
              <img src={`${IMG}/form_development.png`} alt="Form development — accessibility, interventions, and datum" loading="lazy" />
            </figure>
          </section>

          {/* ── Program ── */}
          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">Program</span>
              <h2 className="diagram-sections-title serif">Programmatic structure</h2>
              <p className="diagram-sections-lead">
                Existing programs from the site — Mosque, Khidmat Markaz, Barracks, and Vendors — are
                integrated with the proposed spatial programs of Ground Zero, Perch, Forum, and Edge to
                form a continuous civic surface that merges old and new uses.
              </p>
            </div>
            <figure className="diagram-figure">
              <img src={`${IMG}/program.png`} alt="Programmatic structure — existing and proposed" loading="lazy" />
            </figure>
          </section>

          {/* ── Design strategies diagram + charcoal ── */}
          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">Design strategies</span>
              <h2 className="diagram-sections-title serif">Ground:0 · Perch · Forum · Edge</h2>
              <p className="diagram-sections-lead">
                Four spatial strategies structure the intervention — from public plaza and elevated vistas to
                gathering enclosures and edge interaction corridors.
              </p>
            </div>
            <div className="strategies-pair">
              <figure className="diagram-figure">
                <img src={`${IMG}/design_strategies_diagram.png`} alt="Design strategies diagram — Ground:0, Perch, Forum, Edge" loading="lazy" />
              </figure>
              <figure className="diagram-figure">
                <img src={`${IMG}/charcoal.png`} alt="Charcoal conceptual drawing — four levels" loading="lazy" />
              </figure>
            </div>
          </section>

          {/* ── Ground:0 combined panel ── */}
          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">Strategy detail</span>
              <h2 className="diagram-sections-title serif">Ground:0 · Perch · Forum · Edge — from concept to resolution.</h2>
              <p className="diagram-sections-lead">
                Each strategy is explored through 3D massing, diagrammatic overlays, and site-scaled drawings
                that test how the four layers interact across the civic surface.
              </p>
            </div>
            <figure className="diagram-figure">
              <img src={`${IMG}/Ground_0_components_full.png`} alt="Ground:0, Perch, Forum, Edge — combined strategy panels" loading="lazy" />
            </figure>
          </section>

          {/* ── Visuals carousel — mid-page ── */}
          <section className="diagram-sections visuals-section">
            <div className="section-heading">
              <span className="text-label">Experience of the space</span>
              <h2 className="diagram-sections-title serif">Spatial impressions.</h2>
            </div>
            <VisualCarousel images={experienceImages.slice(0, 4)} label="Experience of the space — first set" />
          </section>

          {/* ── 3D design strategies + features ── */}
          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">3D design strategies</span>
              <h2 className="diagram-sections-title serif">Site features and civic amenities.</h2>
              <p className="diagram-sections-lead">
                The aerial view locates each programmatic element on site — Tree House, One Window, Pedestrian
                Connectivity, Chaye Khana, Interactive Pathway, Pond, Quiet Zone, and Food Stalls.
              </p>
            </div>
            <figure className="diagram-figure">
              <img src={`${IMG}/design_strategies_3d.png`} alt="Design strategies 3D aerial view with callouts" loading="lazy" />
            </figure>
            <div className="features-grid">
              {siteFeatures.map((f) => (
                <article key={f.title} className="analysis-card">
                  <h3 className="serif">{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* ── Master plan ── */}
          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">Master plan</span>
              <h2 className="diagram-sections-title serif">A civic landscape from Town Hall to Nasir Bagh.</h2>
              <p className="diagram-sections-lead">
                The master plan resolves built space, road network, water bodies, green spaces, and paved areas
                into a continuous public surface connecting Town Hall, Punjab University, and the surrounding
                institutions.
              </p>
            </div>
            <figure className="diagram-figure">
              <img src={`${IMG}/master_plan.png`} alt="Master plan — built space, green, water, roads" loading="lazy" />
            </figure>
          </section>

          {/* ── Activity master plan ── */}
          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">Activity</span>
              <h2 className="diagram-sections-title serif">Activity master plan.</h2>
              <p className="diagram-sections-lead">
                Amenities, interaction hotspots, and stay zones are mapped across the site. Landmarks — Fighter Jet
                Memorial, Honorary Fountain, and Memorial — anchor orientation. Programmatic points include Perch,
                Chai Khana, Ground Zero, Khidmat Center, Sitting Space, Tree House, Courtyard, Mosque, Underground
                Pedestrian Channel, Enclosure, One Window, Cafeteria, Barracks, Car Parking, Bus Stop, and Public
                Toilets.
              </p>
            </div>
            <figure className="diagram-figure">
              <img src={`${IMG}/Activity_Map.png`} alt="Activity master plan — amenities, interaction, stay zones" loading="lazy" />
            </figure>
          </section>

          {/* ── Elevation strip ── */}
          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">Elevation</span>
              <h2 className="diagram-sections-title serif">Longitudinal elevation.</h2>
            </div>
            <figure className="diagram-figure">
              <img src={`${IMG}/elevation_strip.png`} alt="Elevation strip" loading="lazy" />
            </figure>
          </section>

          {/* ── Visuals carousel — end of page ── */}
          <section className="diagram-sections visuals-section">
            <div className="section-heading">
              <span className="text-label">Experience of the space</span>
              <h2 className="diagram-sections-title serif">Walking through the intervention.</h2>
            </div>
            <VisualCarousel images={experienceImages.slice(4)} label="Experience of the space — second set" />
          </section>

        </article>
      </div>
    </section>
  );
}
