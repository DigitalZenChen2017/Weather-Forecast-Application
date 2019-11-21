import React from 'react';
import Logo from '../assets/Weather-App-LogoFINAL.png';

console.log(Logo);

function Header() {
  return (
    <nav className="justify-content-center navbar navbar-expand-md navbar-dark bg-dark">
      <a href="/home" className="navbar-brand">
        <img style={imageResponsive} src={Logo} alt="Weather-Forecast-Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/about">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/blog">
              Our Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/premium">
              Sign Up For Premium
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-us">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const imageResponsive = {
  height: 'auto',
  width: 'auto',
  maxHeight: '100px',
  maxWidth: '100px'
};

export default Header;
