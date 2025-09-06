import React from "react";
import "../styles/Sidebar.css";
import "../styles/ResponsiveDesktop.css";
import "../styles/ResponsiveMobile.css";
import SidebarItem from "./SidebarItem";
import { IoCloseCircle } from "react-icons/io5";

const Sidebar = ({
  favorites,
  selectedCity,
  onSelect,
  isOpen,
  toggleSidebar,
}) => {
  return (
    <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
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
      <div className="close-icon-container">
        <IoCloseCircle className="close-icon" onClick={toggleSidebar} />
      </div>
    </div>
  );
};

export default Sidebar;
