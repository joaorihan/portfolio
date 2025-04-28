import React from 'react';
import Header from '../components/Header';
import { FaGithub, FaLinkedin, FaCode, FaServer, FaDatabase } from "react-icons/fa";

function Home() {
  return (
    <div className="App">
      <Header />
      
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            João Rihan
          </h1>
          <p className="hero-subtitle">
            Undergraduate student in Software Engineering @ FIAP
          </p>
          <p className="hero-description">
            I build elegant solutions to complex problems, focusing on clean code and user experience.
          </p>

          <div className="hero-skills">
            <div className="skill-item">
              <FaCode className="skill-icon" />
              <span>Frontend</span>
            </div>
            <div className="skill-item">
              <FaServer className="skill-icon" />
              <span>Backend</span>
            </div>
            <div className="skill-item">
              <FaDatabase className="skill-icon" />
              <span>Database</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="/projects" className="cta-button">
              View Projects
            </a>
            <a href="/contact" className="cta-button cta-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-social">
          <a
            href="https://github.com/joaorihan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/joaorihan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
