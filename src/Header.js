import React from 'react';
import upsLogo from './ups-logo.svg'; // Adjust the path according to your project structure


const Header = () => {
  return (
    <header className="header-title">
      <div className="header-content">
        <img src={upsLogo} alt="UPS Logo" className="header-logo" />
        <h1>Shipping Rate Comparison Tool</h1>
      </div>
    </header>
  );
};

export default Header;
