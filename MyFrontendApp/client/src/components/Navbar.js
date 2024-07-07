import React from 'react';

const Navbar = () => {
  return (
    <div className="nav-bar w-nav">
      <div className="wrapper">
        <a href="index.html" aria-current="page" className="brand w-nav-brand w--current">
          <img src="images/logo.png" alt="" width="260" height="auto" sizes="(max-width: 479px) 92vw, 260px" srcSet="images/logo-p-500.png 500w, images/logo.png 542w" className="logo" />
        </a>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <a href="#skills" className="nav-link w-nav-link">Skills</a>
          <a href="#Work" className="nav-link w-nav-link">Experiences</a>
          <a href="#" className="nav-link w-nav-link">Photography</a>
          <a href="#Contact" className="nav-link button w-nav-link">Contact</a>
        </nav>
        <div className="menu-button w-nav-button">
          <img src="images/Menu-Icon.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
