//import { TextareaAutosize } from '@mui/material';
import React, { useState } from 'react';
import mymedha from '../assets/images/MyMedha.png'
import psu from '../assets/images/psu.png'
import logo from '../assets/images/logo.png'
import acm from '../assets/images/acm.png'

// Sample data for experiences
const experiences = [
    {
      organization: 'MyMedha',
      position: 'Full-Stack Startup Intern',
      timeWorked: 'Jul 2024 - Aug 2024',
      logo: mymedha, // Replace with actual logo URLs
      details: 'Mumbai, Maharashtra, India',
      procedure: 'Roles / Duties:',
      proceduredescription: ['Collaborated toward a business model aimed at empowering young adults potentially impacting 20,000+ individuals.',
          'Performed in a team utilizing web development frameworks including, React, NextJS, Typescript, Javascript, PostGreSQL, Tailwind CSS, to build a scalable website, maintaining over 7,000+ lines of code.',
          'Conducted internal testing and debugging, identifying and resolving 20+ issues to better prepare for a robust launch.',
          'Utilized Git for version control, enhancing collaboration among team members by managing code repositories, implementing branching strategies, and facilitating code reviews.',
          'Integrated third-party APIs to enhance website functionality, resulting in improved user experience and seamless data retrieval for dynamic content.'],
    },
    {
      organization: 'The Pennsylvania State University',
      position: 'Retail Dining Assistant',
      timeWorked: 'Oct 2023 - Present',
      logo: psu, // Replace with actual logo URLs
      details: 'State College, PA',
      procedure: 'Roles / Duties:',
      proceduredescription: ['Managed high-volume order flow during peak dining hours, maintaining order accuracy and timeliness.',
          'Assisted in monitoring and managing inventory levels to minimize waste and ensure product availability.',
          'Reported low stock items to management and participated in restocking efforts.'],
    },
    {
      organization: 'The Pennsylvania State University',
      position: 'Math Proctor',
      timeWorked: 'Sept 2023 - Present',
      logo: psu, // Replace with actual logo URLs
      details: 'State College, PA',
      procedure: 'Roles / Duties:',
      proceduredescription: ['Ensured a secure testing environment for large-scale math exams, maintaining integrity of the assessment process.',
          'Collaborated with instructors and teaching assistants to coordinate exam logistics, including distribution of materials.',
          'Maintained records of attendance and incident reports, contributing to the overall quality control of the examination.'],
    },
    {
      organization: 'The Pennsylvania State University',
      position: 'Teaching Asistant - Physics',
      timeWorked: 'Aug 2023 - Dec 2023',
      logo: psu, // Replace with actual logo URLs
      details: 'State College, PA',
      procedure: 'Roles / Duties:',
      proceduredescription: ['Provided invaluable support as a Physics Teaching Assistant in a dynamic classroom environment with 300+ students.',
          'Collaborated with the instructor to align teaching methods and ensure a seamless learning experience.',
          'Maintained knowledge of current pedagogical techniques to enhance the teaching and learning process.'],
    },
    // Add more experiences as needed
  ];
  
  const orgs = [
      {
        organization: 'Hyperloop Development Team at Penn State',
        position: 'Vice-President / Co-Founder',
        timeWorked: 'Sept 2024 - Present',
        logo: logo, // Replace with actual logo URLs
        details: 'State College, PA',
        procedure: 'Roles / Duties:',
        proceduredescription: ['Spearheaded the founding of a student organization, assembling a team with 25 individuals from 8 disciplines.',
            'Anticipate to research and develop Hyperloop transportation technology, securing $20,000+ in sponsorship by 2025.',
            'Developing a website, managing 10+ pages of content and integrating interactive features to increase recruitment.'],
      },
      {
          organization: 'The Association for Computing Machinery, Penn State',
          position: 'Secretary',
          timeWorked: 'Dec 2023 - Present',
          logo: acm, // Replace with actual logo URLs
          details: 'State College, PA',
          procedure: 'Roles / Duties:',
          proceduredescription: ['Maintained and organized mailing lists to facilitate streamlined communication within the club.',
              'Promoted events through email communications, achieving a 20% increase in participation among members.',
              'Facilitated the onboarding of 100+ new members each semester by providing information and resources by providing information and resources about club activities, leading to a 10% increase in member retention.'],
        },
      // Add more experiences as needed
    ];

const ExperiencesMobile = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openLightbox = (exp) => {
    setSelectedProject(exp);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.list}>
      <h1 style={styles.title}>Experiences</h1>
      <h1 style={styles.title}>Work</h1>
        {experiences.map((exp, index) => (
          <div key={index} style={styles.experienceItem} onClick={() => openLightbox(exp)}>
            <img src={exp.logo} alt={exp.organization} style={styles.logo} />
            <div style={styles.experienceDetails}>
              <div style={styles.organization}>{exp.organization}</div>
              <div style={styles.position}>{exp.position}</div>
              <div style={styles.timeWorked}>{exp.timeWorked}</div>
            </div>
          </div>
        ))}
        <h1 style={styles.title}>Organizations / Clubs</h1>
        {orgs.map((exp, index) => (
          <div key={index} style={styles.experienceItem} onClick={() => openLightbox(exp)}>
            <img src={exp.logo} alt={exp.organization} style={styles.logo} />
            <div style={styles.experienceDetails}>
              <div style={styles.organization}>{exp.organization}</div>
              <div style={styles.position}>{exp.position}</div>
              <div style={styles.timeWorked}>{exp.timeWorked}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for selected project */}
      {selectedProject && (
  <div style={styles.lightboxOverlay}>
    <div style={styles.lightboxContent}>
      <span style={styles.closeButton} onClick={closeLightbox}>×</span>

      <h2 style={styles.lightboxTitle}>{selectedProject.organization}</h2>
      <p style={styles.lightboxDescription}>
        {selectedProject.details}
      </p>
      <hr />
      <br />

      {/* First Information Section (Logo Below Overview) */}
      <div style={styles.lightboxSection}>
        <img src={selectedProject.logo} alt="Project Logo" style={styles.lightboxImage} />
        <h3>{selectedProject.procedure}</h3>

        {/* Render proceduredescription as bullet points */}
        <ul style={styles.lightboxList}>
          {selectedProject.proceduredescription.map((item, index) => (
            <li key={index} style={{...styles.lightboxListItem, textAlign: 'left', marginBottom: '10px'}}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <hr />
      <br />
    </div>
  </div>
)}

    </div>
  );
};

const styles = {
    container: {
      padding: '20px',
      margin: '40px 0 0',
    },
    title: {
      fontSize: '2.5rem',
      textAlign: 'center',
      marginBottom: '20px',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    experienceItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: 'white',
      cursor: 'pointer',
    },
    experienceDetails: {
      textAlign: 'center',
    },
    logo: {
      width: '100px',
      height: '100px',
      borderRadius: '15px',
      marginBottom: '10px'
    },
    organization: {
      fontWeight: 'bold',
    },
    position: {
      fontStyle: 'italic',
      fontSize: '0.9rem',
      color: '#555',
    },
    timeWorked: {
      fontSize: '0.8rem',
      color: '#777',
    },
    lightboxOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    },
    lightboxContent: {
      width: '90%',
      maxWidth: '600px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '10px',
      padding: '20px',
      position: 'relative',
      maxHeight: '80vh', // Max height for content
      overflowY: 'auto', // Enable scrolling for content
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      fontSize: '2rem',
      color: 'black',
      cursor: 'pointer',
    },
    lightboxTitle: {
      marginBottom: '20px',
      textAlign: 'center',
    },
    lightboxDescription: {
      textAlign: 'center',
      marginBottom: '20px',
    },
    lightboxSection: {
      marginBottom: '20px',
      textAlign: 'center',
    },
    lightboxImage: {
      width: '50%',
      height: 'auto',
      borderRadius: '10px',
      marginBottom: '10px',
    },
  };
  

export default ExperiencesMobile;
