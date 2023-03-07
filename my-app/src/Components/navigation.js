import React from 'react';

function Navigation() {
    return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    <a class="navbar-item has-text-primary header" href="/">
      <h1>Tiffany Anglero</h1>
    </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true">About Me</span>
        <span aria-hidden="true">Portfolio</span>
        <span aria-hidden="true">Contact</span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item">
            <span class="icon">
    <i class="fas fa-info-circle"></i>
  </span>
         <i icon="fa-light fa-address-card" /> Home
        </a>
  
        <a class="navbar-item">
          About
        </a>
  
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>
  
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Portfolio
            </a>
            <a class="navbar-item">
              Contact
            </a>
            {/* <hr class="navbar-divider"> */}
            <a class="navbar-item">
              Resume
            </a>
          </div>
        </div>
      </div>
  
      </div>
  </nav>    
   
   )
   }
  
  export default Navigation;