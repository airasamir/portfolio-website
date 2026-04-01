import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import Art from './pages/Art';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/art" element={<Art />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container footer-inner">
            <span>© 2026 AIRAS AMIR</span>
            <span>NATIONAL COLLEGE OF ARTS, LAHORE</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
