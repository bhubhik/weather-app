import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const apiKey = '37039385b60f47fdaff90331211806';
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((loc) => {
      setLat(loc.coords.latitude);
      setLon(loc.coords.longitude);
      console.log(lat, lon);
    });
    if (lat !== 0 && lon !== 0) {
      const fetchData = async () => {
        const response = await axios(
          ` http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`
        );
        console.log(response.data);
        const results = response.data;
        setWeatherData({
          name: results.location.name,
          country: results.location.country,
          region: results.location.region,
          temperature: results.current.temp_c,
          description: results.current.condition.text,
          icon: results.current.condition.icon,
          humidity: results.current.humidity,
        });
        console.log(weatherData);
      };
      fetchData();
    }
  }, [lat, lon]);

  return (
    <div>
      <h1>Weather App</h1>
      <h3>
        Coordinates : latitude= {lat}, longitude= {lon}
      </h3>
      <ul>
        <li>Name : {weatherData.name}</li>
        <li>Country : {weatherData.country}</li>
        <li>Temperature : {weatherData.temperature}</li>
        <li>description : {weatherData.description}</li>
      </ul>
      <img src={weatherData.icon} alt='Icon' />
    </div>
  );
};

export default App;
