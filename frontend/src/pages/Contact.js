import React from 'react';
import Header from '../components/Header';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="App">
      <Header />
      
      <main className="content-section">
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-description">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
        
        <div className="contact-methods">
          <a 
            href="mailto:joaorihan@example.com"
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="contact-icon" />
            <span>joaorihan@example.com</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/joaorihan"
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          
          <a 
            href="https://github.com/joaorihan"
            className="contact-method"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default Contact;
