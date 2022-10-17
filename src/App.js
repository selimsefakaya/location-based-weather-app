import "./App.css";
import React, { useEffect, useState } from "react";
import { usePosition } from "use-position";
import Weather from "./components/Weather";

const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
      ).then((res) => res.json());
      setWeather(data);
    } catch {
      alert("There is no data.");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div>
      <h2>Weather</h2>
      <hr />
      <Weather weather={weather} />
    </div>
  );
};

export default App;
