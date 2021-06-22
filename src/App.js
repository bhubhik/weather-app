import React, { useState, useEffect } from 'react';
import Display from './components/display';
import axios from 'axios';
import './App.css';

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
          ` https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`
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
      <div className='p-4 '>
        <h1 className='app-title text-6xl font-bold text-blue-500  flex justify-center items-center h-28'>
          Weather App
        </h1>
      </div>
      <div className='h-auto '>
        <Display weatherData={weatherData} />
      </div>
    </div>
  );
};

export default App;
