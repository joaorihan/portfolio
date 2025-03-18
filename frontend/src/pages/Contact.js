import React from 'react';
import Header from '../components/Header';

function Contact({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container my-5">
        <h1>Contact</h1>
        <p>Contact page content goes here.</p>
      </div>
    </div>
  );
}

export default Contact;
