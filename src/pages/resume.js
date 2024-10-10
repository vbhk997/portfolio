// src/pages/Resume.js
import React from 'react';
import resume from '../vaibhav_kumar_resume.pdf'

const resumeData = {
  education: [
    {
      institution: 'The Pennsylvania State University, University Park, PA',
      major: 'B.S. Computer Science',
      minor: 'Cybersecurity, Engineering Entrepreneurship',
      gpa: '3.85',
      yearsAttended: '2022 - Present',
    },
    {
      institution: 'Hiranandani Foundation School, Thane, MH, India',
      major: 'High School',
      minor: 'N/A',
      gpa: 'ICSE X: 95.7%, ISC XII: 92.2%',
      yearsAttended: '2018 - 2022',
    },
  ],
  workExperience: [
    {
      company: 'MyMedha',
      position: 'Full Stack Startup Intern',
      timeAttended: 'Jul 2024 - Aug 2024',
      //description: 'Developing software applications and maintaining existing codebases.',
    },
    {
      company: 'Project Work, Larsen & Toubro',
      position: 'Project Collaboration on Alexa Skill Development',
      //timeAttended: 'Jun 2021 - Dec 2021',
      //description: 'Assisted in software development and testing.',
    },
  ],
  projectExperience: [
    {
      project: 'Smart Trolley System',
      timeWorked: 'Aug 2024 - Present',
      description: 'Designing a comprehensive trolley system architecture integra2ng IoT sensors, RFID technology, and Computer Vision. Aspiring to analyze data from over 1,000 shopping sessions to iden2fy paCerns and op2mize system performance.',
    },
    {
      project: 'Inchat - Texting App (Android)',
      timeWorked: 'May 2021 - Dec 2022',
      description: 'Developed a social media application using Java, Android Studio, and Google Firebase for Android Systems. Obtained hands-on experience with Android app development, Java, and backend integration using Firebase.'
    },
    {
      project: 'Smart Business Cards',
      timeWorked: 'Jun 2024 - Jul 2024',
      description: 'Developed an Android application for editing data on NFC cards, making electronic business cards for easier networking.'
    }
  ],
  clubInvolvement: [
    {
      club: 'Hyperloop Development Team at Penn State',
      position: 'Vice President / Co-Founder',
      timeAttended: 'Sept 2024 - Present',
      description: 'Spearheaded the founding of a student organization, assembling a team with 25 individuals from 8 disciplines.',
    },
    {
      club: 'The Association for Computing Machinery, Penn State',
      position: 'Secretary',
      timeAttended: 'Sept 2023 - Present',
      description: 'Maintained and organized website and mailing lists to facilitate communication within a club of over 2000+ participants.',
    },
  ],
  relevantCourses: [
    {
      course: 'Udemy',
      description: 'The Complete Android T + Java Developer Course',
    },
    {
      course: 'SAE India Online',
      description: 'Real Time Object Detection and Video processing',
    },
    {
      course: 'Udemy (Currently Pursuing)',
      description: 'Machine Learning A-Z, (Python and R)',
    },
    {
      course: 'The Odin Project (Currently Pursuing)',
      description: 'Javascript Full Stack',
    },
  ],
  skills: ['Java', 'C', 'Python', 'HTML', 'CSS', 'XML', 'Tailwind CSS', 'Node', 'PostgreSQL', 'ReactJS', 'Linux', 'Unix', 'Android Studio', 'Google Firebase', 
    'SQL', 'Git', 'GitHub', 'Javascript', 'Blender', 'AWS', 'Cryptography', 'pytorch', 'scikitlearn', 'pandas', 'numPy'
  ],
};

const Resume = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Resume</h1>
      
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} style={styles.sectionItem}>
            <h3 style={styles.itemTitle}>{edu.institution}</h3>
            <p>{edu.major}, Minor in {edu.minor}</p>
            <p>GPA: {edu.gpa}</p>
            <p>{edu.yearsAttended}</p>
          </div>
        ))}
      </div>
      
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Work Experience</h2>
        {resumeData.workExperience.map((work, index) => (
          <div key={index} style={styles.sectionItem}>
            <h3 style={styles.itemTitle}>{work.company}</h3>
            <p>{work.position}</p>
            <p>{work.timeAttended}</p>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
      
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        {resumeData.projectExperience.map((project, index) => (
          <div key={index} style={styles.sectionItem}>
            <h3 style={styles.itemTitle}>{project.project}</h3>
            <p>{project.timeWorked}</p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Club Involvement</h2>
        {resumeData.clubInvolvement.map((club, index) => (
          <div key={index} style={styles.sectionItem}>
            <h3 style={styles.itemTitle}>{club.club}</h3>
            <p>{club.position}</p>
            <p>{club.timeAttended}</p>
            <p>{club.description}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Relevant Courses</h2>
        {resumeData.relevantCourses.map((course, index) => (
          <div key={index} style={styles.sectionItem}>
            <h3 style={styles.itemTitle}>{course.course}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <ul style={styles.skillsList}>
          {resumeData.skills.map((skill, index) => (
            <li key={index} style={styles.skillItem}>{skill}</li>
          ))}
        </ul>
      </div>

      {/* Download Resume Button */}
      <div style={styles.downloadContainer}>
        <a href={resume} download style={styles.downloadButton}>Download Resume</a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '900px',
    margin: '60px auto', // 60px margin around the page
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    borderBottom: '2px solid #333',
    marginBottom: '15px',
    paddingBottom: '5px',
  },
  sectionItem: {
    marginBottom: '10px',
  },
  itemTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  skillsList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  skillItem: {
    display: 'inline-block',
    background: '#e0e0e0',
    borderRadius: '5px',
    padding: '5px 10px',
    marginRight: '10px',
    marginBottom: '10px',
  },
  downloadContainer: {
    textAlign: 'center',
    marginTop: '40px',
  },
  downloadButton: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
  },
};

export default Resume;
