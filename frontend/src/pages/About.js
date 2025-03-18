import React from 'react';
import Header from '../components/Header';

function About({ darkMode, toggleDarkMode }) {
  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container my-5">
        <h1>About</h1>
        <p>About page content goes here.</p>
      </div>
    </div>
  );
}

export default About;
