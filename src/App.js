import React, { useState, useEffect } from 'react';
import Display from './components/display';
import SearchBox from './components/searchBox';
import axios from 'axios';

import './App.css';

const App = () => {
  const apiKey = '37039385b60f47fdaff90331211806';
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    setTimeout(() => {
      //Foe spinner to load
      navigator.geolocation.getCurrentPosition((loc) => {
        setLat(loc.coords.latitude);
        setLon(loc.coords.longitude);
      });
    }, 1000);
    if (lat !== 0 && lon !== 0) {
      const fetchData = async () => {
        const response = await axios(
          ` https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`
        );

        setLoading(false);
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
      };
      fetchData();
    }
  }, [lat, lon]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (search === '') return;
    const response = await axios.get(
      ` https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search}`
    );
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
    setLoading(false);
  };

  return (
    <div>
      <header className='p-4 '>
        <h1 className='app-title text-6xl font-bold text-blue-300  flex justify-center items-center h-28'>
          Weather App
        </h1>
      </header>
      <div className='h-auto '>
        <div className=' flex justify-center items-center  h-24 outline-none'>
          <SearchBox
            handleSearch={handleSearch}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <Display weatherData={weatherData} loading={loading} apiKey={apiKey} />
      </div>
    </div>
  );
};

export default App;
