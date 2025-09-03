import React from "react";
import "../styles/WeatherDisplay.css";
import Header from "./Header";
import WeatherDetail from "./WeatherDetail";

const WeatherDisplay = ({ onSearch, selectedCity = "Stockholm", onDelete }) => {
  return (
    <main className="weather-display-container">
      <Header onSearch={onSearch} />
      <WeatherDetail city={selectedCity} onDelete={onDelete} />
    </main>
  );
};

export default WeatherDisplay;
