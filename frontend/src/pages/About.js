import React from 'react';
import Header from '../components/Header';
import '../styles/About.css';

function About() {
  return (
    <div className="App">
      <Header />
      
      <main className="content-section">
        <h1 className="section-title">About Me</h1>
        <div className="about-content">
          <p className="about-text">
            I'm a passionate developer with a focus on creating elegant and efficient solutions.
            My journey in technology started with developing plugins in Java for videogames,
            and has evolved into a deep appreciation for coding and software development.
          </p>
          
          <div className="skills-section">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Spring Boot</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>SQL</li>
                  <li>REST APIs</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="education-section">
            <h2 className="education-title">Education</h2>
            <div className="education-grid">
              <div className="education-item">
                <h3>Bachelor's Degree in Software Engineering</h3>
                <p className="institution">FIAP</p>
                <p className="period">Jan 2023 - Dec 2026</p>
                <p className="description">
                  Bachelor's degree in Software Engineering with focus on software development
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
