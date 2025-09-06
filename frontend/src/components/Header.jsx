import React, { useState } from "react";
import "../styles/Header.css";
import "../styles/ResponsiveDesktop.css";
import VirtualKeyboard from "./VirtualKeyboard";

const Header = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleEnter = () => {
    const trimmed = input.trim();
    if (trimmed === "") {
      alert("Please enter a city name.");
      return;
    }

    onSearch(trimmed);
    setInput("");
    setShowKeyboard(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEnter();
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
            onFocus={() => setShowKeyboard(true)}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEnter()}
          />
        </label>
      </div>

      {showKeyboard && (
        <div className="keyboard-wrapper">
          <VirtualKeyboard
            value={input}
            onChange={setInput}
            onEnter={(val) => {
              const trimmed = val.trim();
              if (trimmed === "") {
                alert("Please enter a city name.");
                return;
              }
              onSearch(trimmed);
              setInput("");
              setShowKeyboard(false);
            }}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
