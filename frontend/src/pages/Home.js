import React from 'react';
import Header from '../components/Header';
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Home({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="hero-section" id="home">
        <h1>Hi, I'm João</h1>
        <p>I'm a developer. I'm passionate about</p>

        <div className="social-icons">
          <a
            href="https://www.github.com/joaorihan"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <FaGithub/>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <FaLinkedin/>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
