import React from 'react';
import './Architecture.css';

const thesisHighlights = [
  {
    title: 'Strength over power',
    body:
      'The thesis opposes bureaucratic dominance with civic strength, collective participation, accountability, and local forms of public dialogue.',
  },
  {
    title: 'Ground Zero analysis',
    body:
      'The project begins with governance theory, citizenship, front stage versus back stage, and the trust gap between citizens and public administration.',
  },
  {
    title: 'Town Hall to public realm',
    body:
      'The architectural proposal reframes Town Hall from a colonial monument of authority into a legible civic platform with open, shared, and participatory space.',
  },
];

const processStages = [
  {
    id: 'analysis',
    kicker: 'Lead board',
    title: 'Ground Zero analysis',
    img: '/assets/architecture/hero/hero_page_001.png',
    caption: 'Power versus strength, governance, citizenship, and the front-stage/back-stage divide anchor the thesis.',
    body:
      'The thesis establishes a theoretical framework before formal resolution. It studies governance as what should be done, public administration as how it is done, and the deep public distrust created when administrative power becomes spatially opaque.',
  },
  {
    id: 'mapping',
    kicker: 'Site reading',
    title: 'Mapping the urban field',
    img: '/assets/architecture/mapping/mapping_page_001.png',
    caption:
      'Major transit, educational institutions, bazaar networks, civic buildings, and the urban isolation of Nasir Bagh are mapped together.',
    body:
      'Ground Zero mapping reveals how the site sits within a dense civic realm yet remains spatially fragmented. It tracks movement, institutions, vendor activity, checkpoints, and symbolic separation to identify where public access is blocked or diluted.',
  },
  {
    id: 'section',
    kicker: 'Sectional thinking',
    title: 'Porosity through section',
    img: '/assets/architecture/section/section_page_001.png',
    caption:
      'Subterranean structures, public plaza, water bodies, and lines of sight organize a civic surface that stays open to the city.',
    body:
      'Sectional explorations test how below-ground and above-ground conditions can coexist. Spiral ramps, split levels, light wells, and public squares create a continuous spatial experience rather than a sealed institutional object.',
  },
  {
    id: 'models',
    kicker: 'Model studies',
    title: 'Hierarchy of levels and interlocking form',
    img: '/assets/architecture/model/model_page_004.png',
    caption:
      'Study models examine interlocking masses, courtyards, parallel interaction, and new pedestrian pathways.',
    body:
      'The physical models clarify how the built form can remain porous while still carrying civic presence. Connectivity, courtyards, and hierarchy are used to convert abstract ideas about democracy into spatial relationships.',
  },
];

const analysisThemes = [
  {
    title: 'Core question',
    body:
      'How can Town Hall Lahore shift from a symbol of authority into a civic platform that supports participation, transparency, and cultural agency?',
  },
  {
    title: 'Political reading',
    body:
      'Ground Zero frames the public realm through the lens of power, bias, citizenship, and governance. The project critiques top-down administration and argues for visible, participatory decision-making.',
  },
  {
    title: 'Spatial problem',
    body:
      'The existing site operates as an urban island. Major institutions and transport networks surround it, yet access, visibility, and use remain uneven across the day and across user groups.',
  },
  {
    title: 'Design response',
    body:
      'The intervention introduces open civic surfaces, meeting spaces, public programs, and spatial strategies inspired by local dialogue practices such as baithaks, panchayats, and communal thresholds.',
  },
];

export default function Architecture() {
  return (
    <section className="architecture-page">
      <div className="container">
        <header className="page-header arch-hero">
          <div className="arch-hero-copy">
            <span className="text-label">Architecture thesis</span>
            <h2 className="hero-title serif">Reclaiming Our City: Stitching Town Hall into Public Realm</h2>
            <p className="arch-hero-body">
              This thesis reimagines Town Hall Lahore as a decolonized civic platform. The architecture section is
              organized around process rather than final image alone, moving from Ground Zero analysis and governance
              research into mapping, section, model studies, and public-facing design resolution.
            </p>
          </div>
          <div className="hero-cover-wrap">
            <img
              src="/assets/architecture/hero/hero_narrative_board.png"
              alt="Narrative board from Reclaiming Our City"
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
          <section className="narrative-section">
            <div className="narrative-meta">
              <span className="meta-tag">Ground Zero analysis</span>
              <span className="meta-tag">Town Hall Lahore</span>
              <span className="meta-tag">National College of Arts</span>
            </div>
            <h2>Why Ground Zero?</h2>
            <p className="narrative-body">
              The thesis asks how a colonial-era Town Hall can be reimagined as a decolonized civic platform that
              supports participatory democracy, inclusivity, and local cultural agency. Rather than beginning from form,
              the project begins from a critical reading of governance, citizenship, and the lived consequences of
              spatial power.
            </p>
            <p className="narrative-body">
              At the center of the project is a <strong>power versus strength</strong> dichotomy. Power controls and
              separates; strength is collective, resilient, and participatory. Ground Zero uses architecture to bridge
              the trust gap between citizens and public administration through openness, legibility, and shared public
              ground.
            </p>
          </section>

          <section className="analysis-grid-section">
            <div className="section-heading">
              <span className="text-label">Ground Zero analysis</span>
              <h2 className="serif">The process begins with a political reading of space.</h2>
            </div>
            <div className="analysis-grid">
              {analysisThemes.map((item) => (
                <article key={item.title} className="analysis-card">
                  <h3 className="serif">{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="diagram-sections">
            <div className="section-heading">
              <span className="text-label">Process and diagrams</span>
              <h2 className="diagram-sections-title serif">From site reading to spatial resolution.</h2>
              <p className="diagram-sections-lead">
                The sequence below follows the PDF-derived architecture material: Ground Zero analysis, mapping,
                section, and model studies that collectively build the thesis.
              </p>
            </div>

            {processStages.map((stage) => (
              <section key={stage.id} className="diagram-block" aria-labelledby={`diagram-${stage.id}`}>
                <div className="diagram-block-meta">
                  <span className="diagram-kicker">{stage.kicker}</span>
                  <h3 id={`diagram-${stage.id}`}>{stage.title}</h3>
                  <p className="diagram-caption">{stage.caption}</p>
                </div>
                <figure className="diagram-figure">
                  <img src={stage.img} alt={stage.title} loading="lazy" />
                  <figcaption>{stage.body}</figcaption>
                </figure>
              </section>
            ))}
          </section>

          <section className="resolution-section">
            <h2>Design resolution</h2>
            <p>
              The proposal treats architecture as a public framework rather than a closed monument. It introduces a
              civic surface of plazas, open platforms, pedestrian linkages, and multi-use programs where administration
              can become visible, contestable, and open to public participation.
            </p>
            <div className="resolution-grid">
              <article>
                <span className="text-label">Spatial moves</span>
                <ul className="resolution-list">
                  <li>Open civic platforms and public square conditions</li>
                  <li>Subterranean and split-level movement systems</li>
                  <li>Porous thresholds instead of hard separation</li>
                  <li>Public programs enveloping administrative functions</li>
                </ul>
              </article>
              <article>
                <span className="text-label">Programmatic intent</span>
                <ul className="resolution-list">
                  <li>Public hearings, civic workshops, and legal literacy events</li>
                  <li>Inclusive meeting spaces inspired by local dialogue practices</li>
                  <li>Cultural and community programs tied to the city’s civic memory</li>
                  <li>A readable urban extension connecting Town Hall to the public realm</li>
                </ul>
              </article>
            </div>
          </section>

        </article>
      </div>
    </section>
  );
}
