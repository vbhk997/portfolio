// src/pages/AboutUs.js
import React from 'react';
import AboutUsDesktop from './aboutusdesktop';
import AboutUsMobile from './aboutusmobile';
import useMediaQuery from '@mui/material/useMediaQuery';

const AboutUs = () => {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Adjust the breakpoint as needed

  return (
    <>
      {isMobile ? <AboutUsMobile /> : <AboutUsDesktop />}
    </>
  );
};

export default AboutUs;
