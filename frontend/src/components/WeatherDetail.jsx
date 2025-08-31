import React from "react";
import "../styles/WeatherDetail.css";
import { WiRaindrop } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { IoIosSunny } from "react-icons/io";

const WeatherDetail = () => {
  return (
    <div className="weather-details-section-container">
      <div className="information-card-1-container">
        <div className="information-card-1">
          <div className="city-name-container">
            <h1>Stockholm</h1>
          </div>

          <div className="weather-type-image-container">
            <div className="weather-type-image">
              <IoIosSunny className="weather-icon-img" />
            </div>
          </div>

          <div className="city-temperature-container">
            <h1>18°</h1>
          </div>

          <div className="type-of-weather-container">
            <p>Sunny</p>
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
                <p>65%</p>
              </div>
              <div className="humitidy-text">
                <p>Humitify</p>
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
                <p>10km/h</p>
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
                <p>5</p>
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
