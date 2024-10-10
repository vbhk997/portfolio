// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import AboutUs from './pages/about';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Experience from './pages/experience';
import './App.css';  // Importing the CSS file

function App() {
  return (
    <Router>
      {/* Header is outside of Routes so it shows on every page */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
