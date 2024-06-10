import React from 'react';
import { Link } from 'react-router-dom';
import "../navbar.css"


const Navbar = () => {
  return (
    <header>
      <section className="navbar" id="nav">
      <Link to="/">
    <div className="logo">.dev-Julia &#123;</div>
  </Link>
        <div className="hamburger"></div>
        <nav>
          <a href="/#pro1" className="nav-link">Projects</a>
          <Link to="/contact" className="nav-link" id="contact">Contact</Link>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
