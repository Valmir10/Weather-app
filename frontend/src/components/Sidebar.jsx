import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="header-sidebar-container">
        <h1>Favorites</h1>
      </div>

      <div className="sidebar-menu-container">
        <div className="sidebar-list-item">
          <div className="location-name-temperature-container">
            <div className="location-name-container">
              <p>Malmö</p>
            </div>
            <div className="location-temperature-container">
              <p>22°</p>
            </div>
          </div>
          <div className="location-weather-type-time-container">
            <div className="weather-type-container">
              <p>Sunny</p>
            </div>
            <div className="time-container">
              <p>16:47</p>
            </div>
          </div>
        </div>

        <div className="sidebar-list-item">
          <div className="location-name-temperature-container">
            <div className="location-name-container">
              <p>Göteborg</p>
            </div>
            <div className="location-temperature-container">
              <p>20°</p>
            </div>
          </div>
          <div className="location-weather-type-time-container">
            <div className="weather-type-container">
              <p>Sunny</p>
            </div>
            <div className="time-container">
              <p>16:47</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
