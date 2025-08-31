import React from "react";
import "../styles/WeatherDisplay.css";
import Header from "./Header";
import WeatherDetail from "./WeatherDetail";

const WeatherDisplay = () => {
  return (
    <main className="weather-display-container">
      <Header />
      <WeatherDetail />
    </main>
  );
};

export default WeatherDisplay;
