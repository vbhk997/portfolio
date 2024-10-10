import React, { useEffect, useState } from 'react';
import AboutUsImage from '../assets/images/photo.jpg'; // Replace with your actual image path

const AboutUsDesktop = () => {
  const [loaded, setLoaded] = useState(false);

  // Trigger animations each time the page is loaded
  useEffect(() => {
    const handlePageLoad = () => {
      setLoaded(true);
    };

    window.addEventListener('load', handlePageLoad); // Listen for page load

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.header, opacity: loaded ? 1 : 0, transition: 'opacity 1s ease' }}>About Me</h1>

      <hr />
      <br />

      <div style={{ ...styles.content, opacity: loaded ? 1 : 0, transition: 'opacity 1.5s ease' }}>
        {/* Image on the left for desktop */}
        <img
          src={AboutUsImage}
          alt="About Me"
          style={{
            ...styles.image,
            transform: loaded ? 'translateX(0)' : 'translateX(-50px)',
            opacity: loaded ? 1 : 0,
            transition: 'transform 1.5s ease, opacity 1.5s ease',
          }}
        />

        {/* Text content on the right for desktop */}
        <div
          style={{
            ...styles.textContent,
            transform: loaded ? 'translateX(0)' : 'translateX(50px)',
            opacity: loaded ? 1 : 0,
            transition: 'transform 1.5s ease, opacity 1.5s ease',
          }}
        >
          <section style={styles.section}>
            <h2>Introduction</h2>
            <p>
            I’m Vaibhav Kumar, a Computer Science student at The Pennsylvania State University, with minors in Cybersecurity and Engineering Entrepreneurship.
            </p>
            <p>
            When I am not coding, I enjoy Sports, Solving Rubik's Cubes and taking up projects that interest me. I have been involved in projects involving IOT, App development, and Web Development.
            </p>
            <p>
            Currently I am also the Vice President of The Hyperloop Development Team at Penn State, and the Secretary of the Association Of Computing Machinery at Penn State.
            </p>
          </section>

          <section style={styles.section}>
            <h2>Professional Summary</h2>
            <p>
            I have a strong foundation in full-stack development, app development, and engineering leadership. With hands-on experience in web development, IoT systems, and augmented reality, I thrive in collaborative environments. 
            </p>
            <p>
            My previous internships and project work, including contributions to smart vehicle technologies and API integrations, have equipped me with the technical skills and adaptability to tackle complex challenges
            </p>
          </section>

          {/* <section style={styles.section}>
            <h2>Interests</h2>
            <p>
              Our interests range from cutting-edge technology like Hyperloop and renewable
              energy solutions to developing tools for enhancing the user experience.
              We are constantly exploring new areas of interest and always learning.
            </p>
          </section> */}
        </div>
      </div>

      <hr />
      <br />
    </div>
  );
};

const styles = {
  container: {
    width: '100%', // Full width of the viewport
    padding: '20px',
    margin: '60px 0 0', // Add top margin to start below header
    boxSizing: 'border-box', // Ensure padding is included in total width
  },
  header: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '20px', // Space below the header
    fontWeight: 'bold',
  },
  content: {
    display: 'flex',
    flexDirection: 'row', // Horizontal layout for desktop
    alignItems: 'center', // Center image vertically
    gap: '40px', // Space between image and text
    justifyContent: 'center', // Center content horizontally
  },
  textContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  section: {
    marginBottom: '0px',
  },
  image: {
    width: '40%', // Image takes 40% of the width on desktop
    height: 'auto',
    borderRadius: '10px',
    maxWidth: '100%', // Ensure the image doesn't overflow
    objectFit: 'cover', // Maintain aspect ratio
  },
};

export default AboutUsDesktop;
