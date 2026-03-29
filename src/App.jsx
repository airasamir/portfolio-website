import React from 'react';
import Header from './components/Header';
import HeroWorks from './components/HeroWorks';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroWorks />
        <About />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          <span>© 2026 AIRAS AMIR</span>
          <span>NATIONAL COLLEGE OF ARTS, LAHORE</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
