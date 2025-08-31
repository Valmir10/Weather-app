import React, { useEffect, useState } from "react";
import "../styles/WeatherDetail.css";
import { WiRaindrop, WiStrongWind } from "react-icons/wi";
import { IoIosSunny } from "react-icons/io";

const WeatherDetail = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/weather?city=Stockholm")
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  if (!weather) return <p>Laddar väder...</p>;

  return (
    <div className="weather-details-section-container">
      <div className="information-card-1-container">
        <div className="information-card-1">
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
                <p>Humitidy</p>
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
    </div>
  );
};

export default WeatherDetail;
