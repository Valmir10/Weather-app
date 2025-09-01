import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import Sidebar from "../components/Sidebar";
import WeatherDisplay from "../components/WeatherDisplay";

const HomePage = () => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [{ city: "Stockholm" }];
  });

  const [selectedCity, setSelectedCity] = useState(() => {
    return localStorage.getItem("selectedCity") || "Stockholm";
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("selectedCity", selectedCity);
  }, [selectedCity]);

  useEffect(() => {
    Promise.all(
      favorites.map((fav) =>
        fetch(`http://localhost:4000/api/weather?city=${fav.city}`)
          .then((res) => res.json())
          .then((data) => ({
            city: data.city,
            temp_c: data.temp_c,
            condition_text: data.condition_text,
            localtime: data.localtime,
          }))
          .catch(() => ({
            city: fav.city,
            temp_c: "--",
            condition_text: "Error",
            localtime: "--",
          }))
      )
    ).then((results) => {
      setFavorites(results);
      setLoading(false);
    });
  }, []);

  const handleSearch = async (cityName) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/weather?city=${cityName}`
      );
      const data = await res.json();

      setFavorites((prev) => {
        const exists = prev.some(
          (f) => f.city.toLowerCase() === data.city.toLowerCase()
        );
        if (exists) return prev;
        return [...prev, data];
      });

      setSelectedCity(data.city);
    } catch (err) {
      console.error("Failed to get city:", err);
    }
  };

  return (
    <div className="home-page-container">
      <Sidebar
        favorites={favorites}
        onSelect={setSelectedCity}
        selectedCity={selectedCity}
      />

      <WeatherDisplay onSearch={handleSearch} selectedCity={selectedCity} />
    </div>
  );
};

export default HomePage;
