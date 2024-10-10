import React, { useState } from 'react';
import './HeaderMobile.css';
import Logo from '../assets/images/vk.png';

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-mobile" style={styles.header}>
      <div style={styles.leftContainer}>
        <a href="/" className="home-link" style={styles.logoLink}>
          <img src={Logo} alt="Logo" className="logo" style={styles.logo} />
        </a>
        <a 
          href="/" 
          style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px' }} // Space between logo and text
        >
          <span className="team-name" style={styles.teamName}>Vaibhav Kumar</span>
        </a>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu} style={styles.hamburgerMenu}>
        &#9776; {/* Hamburger icon */}
      </div>

      <nav className={`menu-mobile ${menuOpen ? 'show-menu' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/experience">Experience</a>
        <a href="/resume">Resume</a>
        <li><a href="https://www.linkedin.com/in/vaibhavkumarprofile" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/vbhk997?tab=repositories" target="_blank" rel="noreferrer">Github</a></li>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between', // Space between left content and hamburger menu
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#fff', // Background color of the header
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center', // Center the logo and text vertically
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '30px', // Adjust logo size as needed
    height: '30px',
    marginRight: '1px',
  },
  teamName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  hamburgerMenu: {
    fontSize: '2rem',
    cursor: 'pointer',
    marginLeft: 'auto', // Ensures hamburger stays on the right
  },
};

export default HeaderMobile;
