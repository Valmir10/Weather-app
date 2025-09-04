import React, { useState } from "react";
import "../styles/Header.css";
import "../styles/ResponsiveDesktop.css";

const Header = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const trimmed = input.trim();

      if (trimmed === "") {
        alert("Please enter a city name.");
        return;
      }

      onSearch(trimmed);
      setInput("");
    }
  };

  return (
    <header className="header-section-container">
      <div className="search-container">
        <label htmlFor="search-input" className="search-label-container">
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </label>
      </div>
    </header>
  );
};

export default Header;
