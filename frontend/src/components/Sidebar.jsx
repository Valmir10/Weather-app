import React from "react";
import "../styles/Sidebar.css";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="header-sidebar-container">
        <h1>Favorites</h1>
      </div>

      <div className="sidebar-menu-container">
        <SidebarItem
          city="Malmö"
          temperature={22}
          weather="Sunny"
          time="16:47"
        />
        <SidebarItem
          city="Göteborg"
          temperature={20}
          weather="Sunny"
          time="16:47"
        />
        <SidebarItem
          city="Stockholm"
          temperature={18}
          weather="Cloudy"
          time="16:47"
        />
      </div>
    </div>
  );
};

export default Sidebar;
