// src/components/DesktopHeader.js

import React from 'react';
import './HeaderDesktop.css';
import Logo from '../assets/images/vk.png';

const DesktopHeader = () => {
  return (
    <nav className="header-desktop">
      <div className="logo-container">
        <a href="/" className="home-link">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        <div className="team-name-container">
          <a 
            href="/" 
            style={{ textDecoration: 'none', color: 'inherit' }} // Ensure no underline and same text color
          >
            <span className="team-name">Vaibhav Kumar</span>
          </a>
        </div>
      </div>
      <ul className="menu-desktop">
        <li><a href="/about">About Me</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="https://www.linkedin.com/in/vaibhavkumarprofile" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/vbhk998" target="_blank">Github</a></li>
      </ul>
    </nav>
  );
};

export default DesktopHeader;
