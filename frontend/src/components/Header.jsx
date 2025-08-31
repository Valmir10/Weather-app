import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header-section-container">
      <div className="search-container">
        <label htmlFor="search-input" className="search-label-container">
          <input type="text" id="search-input" placeholder="Search..." />
        </label>
      </div>
    </header>
  );
};

export default Header;
