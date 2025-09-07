import React from "react";
import "../styles/WeatherDisplay.css";
import "../styles/ResponsiveMobile.css";
import Header from "./Header";
import WeatherDetail from "./WeatherDetail";

const WeatherDisplay = ({
  onSearch,
  selectedCity = "Stockholm",
  onDelete,
  toggleSidebar,
  isSidebarOpen,
}) => {
  return (
    <main
      className={`weather-display-container ${isSidebarOpen ? "blurred" : ""}`}
    >
      <Header onSearch={onSearch} />
      <WeatherDetail
        city={
          typeof selectedCity === "string" ? selectedCity : selectedCity?.name
        }
        onDelete={onDelete}
        toggleSidebar={toggleSidebar}
      />
    </main>
  );
};

export default WeatherDisplay;

/*
import React from "react";
import "../styles/WeatherDisplay.css";
import "../styles/ResponsiveMobile.css";
import Header from "./Header";
import WeatherDetail from "./WeatherDetail";

const WeatherDisplay = ({
  onSearch,
  selectedCity = "Stockholm",
  onDelete,
  toggleSidebar,
  isSidebarOpen,
}) => {
  return (
    <main
      className={`weather-display-container ${isSidebarOpen ? "blurred" : ""}`}
    >
      <Header onSearch={onSearch} />
      <WeatherDetail
        city={selectedCity}
        onDelete={onDelete}
        toggleSidebar={toggleSidebar}
      />
    </main>
  );
};

export default WeatherDisplay;


*/
