import React from "react";
import "../styles/Sidebar.css";
import "../styles/ResponsiveDesktop.css";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ favorites, selectedCity, onSelect }) => {
  return (
    <div className="sidebar-container">
      <div className="header-sidebar-container">
        <h1>Favorites</h1>
      </div>

      <div className="sidebar-menu-container">
        {favorites.length === 0 ? (
          <p className="no-favorites">No favorites added yet</p>
        ) : (
          favorites.map((fav, idx) => (
            <SidebarItem
              key={idx}
              city={fav.city}
              temperature={fav.temp_c || "--"}
              weather={fav.condition_text || "--"}
              time={fav.localtime || "--"}
              isActive={selectedCity === fav.city}
              onSelect={() => onSelect(fav.city)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
