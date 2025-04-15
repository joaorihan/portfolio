import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="App">
      <Header />
      
      <main className="content-section">
        <h1 className="section-title">Entre em Contato</h1>
        <p className="section-description">
          Estou sempre aberto para discutir novos projetos, ideias criativas ou oportunidades de fazer parte de suas visões.
        </p>
        
        <div className="contact-container">
          <div className="contact-form-container">
            <ContactForm />
          </div>
          
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
        </div>
      </main>
    </div>
  );
}

export default Contact;
