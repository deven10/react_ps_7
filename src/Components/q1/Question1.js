import React, { useState, useEffect } from "react";

export const Question1 = () => {
  //Create a React component that fetches weather data from an API endpoint using useEffect hook and displays the current temperature, humidity, and wind speed on the screen using the useState hook. Add a button which toggles between Celsius and Fahrenheit units for the temperature.

  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/weather") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              temperature: 21,
              humidity: 50,
              windSpeed: 10,
            },
          });
        } else {
          reject({
            status: 404,
            message: "Weather data not found.",
          });
        }
      }, 2000);
    });
  };

  const [temperatureData, setTemperatureData] = useState({});
  const [toggle, setToggle] = useState(false);

  const fetchData = async () => {
    try {
      const result = await fakeFetch("https://example.com/api/weather");
      setTemperatureData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calculateFahrenhietTemperature = () =>
    Math.round((temperatureData.temperature * 9) / 5 + 32);

  const calculateCelciusTemperature = () =>
    Math.round(((temperatureData.temperature - 32) * 5) / 9);

  const handleTemperature = () => {
    setToggle((prev) => !prev);

    toggle
      ? setTemperatureData({
          ...temperatureData,
          temperature: calculateCelciusTemperature(),
        })
      : setTemperatureData({
          ...temperatureData,
          temperature: calculateFahrenhietTemperature(),
        });
  };

  return (
    <div>
      <h2>Temperature Details</h2>
      <div>
        <p>Temperature: {temperatureData.temperature}°C</p>
        <p>Humidity: {temperatureData.humidity}%</p>
        <p>Wind speed: {temperatureData.windSpeed} km/h</p>
        <button onClick={() => handleTemperature()}>
          {toggle ? "Convert to Celcius" : "Convert to Fahrenheit"}
        </button>
      </div>
    </div>
  );
};
