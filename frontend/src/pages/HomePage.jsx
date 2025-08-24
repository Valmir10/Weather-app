import React from "react";
import "../styles/HomePage.css";
import Sidebar from "../components/Sidebar";
import WeatherDisplay from "../components/WeatherDisplay";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Sidebar />
      <WeatherDisplay />
    </div>
  );
};

export default HomePage;
