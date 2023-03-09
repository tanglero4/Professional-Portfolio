import React from 'react';

function Navigation({ thisPage, tabChange }) {
  return (
    <div id='nav'>
    <ul className="nav nav-tabs">
    <h1 id='name'>Tiffany Anglero</h1>
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => tabChange('About')}
          className={thisPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => tabChange('Portfolio')}
          className={thisPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => tabChange('Contact')}
          className={thisPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => tabChange('Resume')}
          className={thisPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  );
}

export default Navigation;