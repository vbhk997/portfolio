// src/pages/AboutUsMobile.js
import React from 'react';
import AboutUsImage from '../assets/images/photo.jpg'; // Replace with your actual image path

const AboutUsMobile = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Me</h1>
      <img
        src={AboutUsImage}
        alt="About Us"
        style={styles.image}
      />
      <div style={styles.textContent}>
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
  );
};

const styles = {
  container: {
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  image: {
    width: '100%', // Full width for mobile
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px', // Space between image and text on mobile
  },
  textContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  section: {
    marginBottom: '20px',
  },
};

export default AboutUsMobile;
