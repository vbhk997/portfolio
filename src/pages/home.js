import React from 'react';
import DesktopHome from './DesktopHome';
import MobileHome from './MobileHome';

const Home = () => {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  return (
    <>
      {isMobile ? <MobileHome /> : <DesktopHome />}
    </>
  );
};

export default Home;
