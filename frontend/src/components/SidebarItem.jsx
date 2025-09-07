import React from "react";
import "../styles/Sidebar.css";

const SidebarItem = ({
  city,
  temperature,
  weather,
  time,
  isActive,
  onSelect,
}) => {
  return (
    <div
      className={`sidebar-list-item ${isActive ? "active" : ""}`}
      onClick={onSelect}
    >
      <div className="location-name-temperature-container">
        <div className="location-name-container">
          <p>{city}</p>
        </div>
        <div className="location-temperature-container">
          <p>{temperature}°</p>
        </div>
      </div>

      <div className="location-weather-type-time-container">
        <div className="weather-type-container">
          <p>{weather}</p>
        </div>
        <div className="time-container">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;

/*

import React from "react";
import "../styles/Sidebar.css";

const SidebarItem = ({
  city,
  temperature,
  weather,
  time,
  isActive,
  onSelect,
}) => {
  return (
    <div
      className={`sidebar-list-item ${isActive ? "active" : ""}`}
      onClick={onSelect}
    >
      <div className="location-name-temperature-container">
        <div className="location-name-container">
          <p>{city}</p>
        </div>
        <div className="location-temperature-container">
          <p>{temperature}°</p>
        </div>
      </div>

      <div className="location-weather-type-time-container">
        <div className="weather-type-container">
          <p>{weather}</p>
        </div>
        <div className="time-container">
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;

*/
