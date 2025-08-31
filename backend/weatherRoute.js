// backend/weatherRoute.js
const express = require("express");
const axios = require("axios");

const router = express.Router();

const API_KEY = "aef5917062c4476f9e0191038253108";

router.get("/weather", async (req, res) => {
  const city = req.query.city || "Stockholm";
  console.log("Query:", req.query);

  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );

    const data = response.data;

    const result = {
      city: data.location.name,
      country: data.location.country,
      localtime: data.location.localtime,
      temp_c: data.current.temp_c,
      condition_text: data.current.condition.text,
      condition_icon: data.current.condition.icon,
      feelslike_c: data.current.feelslike_c,
      wind_kph: data.current.wind_kph,
      humidity: data.current.humidity,
      uv: data.current.uv,
    };

    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "failed to get data" });
  }
});

module.exports = router;
