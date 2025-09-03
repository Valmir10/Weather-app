import React, { useState, useEffect } from "react";
import "../styles/HomePage.css";
import Sidebar from "../components/Sidebar";
import WeatherDisplay from "../components/WeatherDisplay";

const DEFAULT_CITY = "Stockholm";

const HomePage = () => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    let parsed = stored ? JSON.parse(stored) : [];

    parsed = parsed.filter((f) => f && f.city);

    if (
      !parsed.some((f) => f.city?.toLowerCase() === DEFAULT_CITY.toLowerCase())
    ) {
      parsed.unshift({ city: DEFAULT_CITY });
    }

    return parsed;
  });

  const [selectedCity, setSelectedCity] = useState(() => {
    return localStorage.getItem("selectedCity") || DEFAULT_CITY;
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
      favorites
        .filter((fav) => fav.city)
        .map((fav) =>
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
      if (!results.some((f) => f.city === DEFAULT_CITY)) {
        results.unshift({
          city: DEFAULT_CITY,
          temp_c: "--",
          condition_text: "--",
          localtime: "--",
        });
      }
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
          (f) =>
            f.city &&
            data.city &&
            f.city.toLowerCase() === data.city.toLowerCase()
        );
        if (exists) return prev;
        return [...prev, data];
      });

      setSelectedCity(data.city || DEFAULT_CITY);
    } catch (err) {
      console.error("Failed to get city:", err);
    }
  };

  const handleDelete = (city) => {
    if (city === DEFAULT_CITY) return;

    const updated = favorites.filter((f) => f.city !== city);
    setFavorites(updated);

    if (selectedCity === city) {
      setSelectedCity(DEFAULT_CITY);
    }
  };

  return (
    <div className="home-page-container">
      <Sidebar
        favorites={favorites}
        onSelect={setSelectedCity}
        selectedCity={selectedCity}
      />
      <WeatherDisplay
        onSearch={handleSearch}
        selectedCity={selectedCity}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default HomePage;
