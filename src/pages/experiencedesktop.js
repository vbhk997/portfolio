import React, { useState, useEffect } from 'react';
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

const ExperiencesDesktop = () => {
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // New state for visibility
  

  // Set isVisible to true after the component mounts
  useEffect(() => {
    setIsVisible(false); // Start with visibility off
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visibility on after a short delay
    }, 100); // 100ms delay before fading in

    // Cleanup timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (exp) => {
    setSelectedProject(exp);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
    setSelectedProject(null);
  };

  return (
    <div style={{ ...styles.container, opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }}>
      
       
      <div style={styles.list}>
      <h1 style={styles.title}>EXPERIENCES</h1>
      <h3 style={styles.title}>Work</h3>
        {experiences.map((exp, index) => (
          <div key={index} style={styles.experienceItem} onClick={() => openLightbox(exp)}>
            <img src={exp.logo} alt={exp.organization} style={styles.logo} />
            <div style={styles.experienceDetails}>
              <div style={styles.organization}>{exp.organization}</div>
              <div style={styles.position}>{exp.position}</div>
            </div>
            <div style={styles.timeWorked}>{exp.timeWorked}</div>
          </div>
        ))}

<h3 style={styles.title}>Organizations / Clubs</h3>
{orgs.map((exp, index) => (
          <div key={index} style={styles.experienceItem} onClick={() => openLightbox(exp)}>
            <img src={exp.logo} alt={exp.organization} style={styles.logo} />
            <div style={styles.experienceDetails}>
              <div style={styles.organization}>{exp.organization}</div>
              <div style={styles.position}>{exp.position}</div>
            </div>
            <div style={styles.timeWorked}>{exp.timeWorked}</div>
          </div>
        ))}
      </div>

      {/* Lightbox for selected project */}
      {lightboxVisible && selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            width: '90%', // Adjusted width for responsiveness
            maxWidth: '1500px', // Set a maximum width for lightbox
            maxHeight: '90vh', // Set maximum height for lightbox
            overflowY: 'auto', // Enable vertical scrolling
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
            position: 'relative',
          }}>
            <span style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              fontSize: '2rem',
              color: 'black',
              cursor: 'pointer',
            }} onClick={closeLightbox}>×</span>

            <h2 style={{ marginBottom: '10px', textAlign: 'center' }}>{selectedProject.organization}</h2>
            <p style={{ textAlign: 'center', marginBottom: '20px' }}>
              {selectedProject.details}
            </p>

            <hr style={{
              border: 'none',
              borderTop: '1px solid #ccc',
              margin: '20px 0',
            }} />

            {/* Side by Side Layout for First Information Section */}
            <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '20px',
}}>
  <img src={selectedProject.logo} alt="Project Logo" style={{
    width: '30%', // Adjusted width for the logo
    height: 'auto',
    borderRadius: '10px',
    marginRight: '20px',
  }} />
  
  <div style={{
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }}>
    <h3 style={{ margin: '0', marginBottom: '10px', textAlign: 'left' }}>{selectedProject.procedure}</h3>
    
    {/* Render proceduredescription as bullet points */}
    <ul style={{ margin: '0', marginBottom: '10px', padding: '10px', textAlign: 'left' }}>
      {selectedProject.proceduredescription.map((item, index) => (
        <li key={index} style={{ marginBottom: '15px' }}>{item}</li>
      ))}
    </ul>
  </div>
</div>


            <hr style={{
              border: 'none',
              borderTop: '1px solid #ccc',
              margin: '20px 0',
            }} />
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    margin: '60px 0 0', // Start below the header
    display: 'flex',
    flexDirection: 'column',
    height: '100vh', // Full viewport height
  },
  title: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '0',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flexGrow: 1, // Allows the list to grow to fill the remaining space
    overflowY: 'auto', // Enable scrolling if needed
  },
  experienceItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    height: '200px', // Set fixed height for each row
    border: '1px solid #ccc', // Border for separation
    borderRadius: '8px',
    backgroundColor: '#ffffff', // Light background for items
    cursor: 'pointer', // Change cursor on hover
  },
  experienceDetails: {
    marginLeft: '10px',
    display: 'flex',
    flexDirection: 'column', // Stack text vertically
    justifyContent: 'center', // Center text vertically
    flexGrow: 1, // Allow this section to grow to fill available space
  },
  logo: {
    width: '180px', // Logo size
    height: '180px',
    borderRadius: '20px',
  },
  organization: {
    fontWeight: 'bold',
    fontSize: '1.2rem', // Increased font size for organization name
    marginLeft: '20px',
  },
  position: {
    fontStyle: 'italic',
    fontSize: '0.9rem',
    color: '#555',
    marginLeft: '20px',
  },
  timeWorked: {
    fontSize: '0.8rem',
    color: '#777',
    marginLeft: 'auto', // Push to the extreme right
    alignSelf: 'center', // Center it vertically in the flex container
    margin: '20px',
  },
};

export default ExperiencesDesktop;
