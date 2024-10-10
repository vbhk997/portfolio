// Header.js
import React, { useState, useEffect } from 'react';
import HeaderDesktop from './desktopheader';
import HeaderMobile from './mobileheader';
import './Header.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width and adjust state accordingly
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile
    };

    // Run on component mount
    checkScreenWidth();

    // Add event listener on window resize
    window.addEventListener('resize', checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  return (
    <>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </>
  );
};

export default Header;
