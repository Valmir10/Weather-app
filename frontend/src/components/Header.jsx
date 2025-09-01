import React, { useState } from "react";
import "../styles/Header.css";

const Header = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      onSearch(input.trim());
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
