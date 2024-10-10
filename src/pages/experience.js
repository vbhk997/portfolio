// src/pages/Experiences.js
import React from 'react';
import ExperiencesDesktop from './experiencedesktop';
import ExperiencesMobile from './experiencemobile';

const Experiences = () => {
  const isMobile = window.innerWidth < 768; // Adjust the breakpoint as needed

  return isMobile ? <ExperiencesMobile /> : <ExperiencesDesktop />;
};

export default Experiences;
