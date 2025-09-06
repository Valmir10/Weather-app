import React, { useEffect, useState } from "react";
import "../styles/WeatherDetail.css";
import "../styles/ResponsiveDesktop.css";
import "../styles/ResponsiveMobile.css";
import { WiRaindrop, WiStrongWind } from "react-icons/wi";
import { IoIosSunny } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import VirtualKeyboard from "./VirtualKeyboard";

const DEFAULT_CITY = "Stockholm";

const WeatherDetail = ({
  city,
  onDelete,
  toggleSidebar,
  input,
  setInput,
  showKeyboard,
  handleEnter,
}) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city || city === "undefined") {
      setError("No city selected");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`http://localhost:4000/api/weather?city=${city}`)
      .then((res) => {
        if (!res.ok) throw new Error("API call failed");
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [city]);

  if (loading) return <p>Loading weather for {city}...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!weather) return null;

  return (
    <div className="weather-details-section-container">
      <div className="information-card-1-container">
        <div className="information-card-1">
          {weather.city !== DEFAULT_CITY && (
            <MdDelete
              className="delete-option-menu-container"
              onClick={() => onDelete && onDelete(weather.city)}
            />
          )}

          <div className="city-name-container">
            <h1>{weather.city}</h1>
          </div>

          <div className="weather-type-image-container">
            <div className="weather-type-image">
              <img
                src={weather.condition_icon}
                alt={weather.condition_text}
                className="weather-icon-img"
              />
            </div>
          </div>

          <div className="city-temperature-container">
            <h1>{weather.temp_c}°</h1>
          </div>

          <div className="type-of-weather-container">
            <p>{weather.condition_text}</p>
          </div>
        </div>
      </div>

      <div className="information-card-2-container">
        <div className="information-card-2">
          <div className="humidity-container">
            <div className="humidity-icon-container">
              <div className="humidity-icon">
                <WiRaindrop className="humidity-icon-img" />
              </div>
            </div>
            <div className="humidity-result-container">
              <div className="humudity-result">
                <p>{weather.humidity}%</p>
              </div>

              <div className="humitidy-text">
                <p>Humidity</p>
              </div>
            </div>
          </div>

          <div className="wind-container">
            <div className="wind-icon-container">
              <div className="wind-icon">
                <WiStrongWind className="wind-icon-img" />
              </div>
            </div>
            <div className="wind-result-container">
              <div className="wind-result">
                <p>{weather.wind_kph} km/h</p>
              </div>
              <div className="wind-text">
                <p>Wind</p>
              </div>
            </div>
          </div>

          <div className="uv-index-container">
            <div className="uv-index-icon-container">
              <div className="uv-index-icon">
                <IoIosSunny className="uv-index-icon-img" />
              </div>
            </div>
            <div className="uv-index-result-container">
              <div className="uv-index-result">
                <p>{weather.uv}</p>
              </div>
              <div className="uv-index-text">
                <p>UV-index</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hamburger-menu-container">
        <GiHamburgerMenu
          className="hamburger-menu-icon"
          onClick={toggleSidebar}
        />
      </div>
      {showKeyboard && (
        <div className="keyboard-wrapper">
          <VirtualKeyboard
            value={input}
            onChange={(val) => setInput(val)}
            onEnter={(val) => {
              const trimmed = val.trim();
              if (trimmed === "") {
                alert("Please enter a city name.");
                return;
              }
              handleSearch(trimmed);
              setInput("");
              setShowKeyboard(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default WeatherDetail;
