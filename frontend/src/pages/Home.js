import React from 'react';
import Header from '../components/Header';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="App">
      <Header />
      
      <main className="hero-section">
        <h1 className="hero-title">
          Hi, I'm João
        </h1>
        <p className="hero-subtitle">
          I'm a developer passionate about creating elegant solutions to complex problems.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/joaorihan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/joaorihan"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
