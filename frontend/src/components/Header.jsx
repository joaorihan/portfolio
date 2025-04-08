import React from 'react';

function Header() {
  return (
    <header className="navbar">
      <a href="/" className="navbar-brand">joaorihan.dev</a>
      
      <nav className="nav-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/projects" className="nav-link">Projects</a>
        <a href="/contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
