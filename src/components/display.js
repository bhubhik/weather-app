import React from 'react';
import SearchBox from './searchBox';

const Display = ({ weatherData }) => {
  return (
    <div>
      <div className=' flex justify-center items-center bg-yellow-100 h-24 outline-none'>
        <SearchBox />
      </div>
      <div className='container flex justify-center items-center  '>
        <div className='bg-yellow-300 w-10/12'>
          <h1>{weatherData.name}</h1>
          <h2>
            {weatherData.country}, {weatherData.region}{' '}
          </h2>
          <div>
            <h2>{weatherData.temperature}°c</h2>
            <h3>{weatherData.description}</h3>
          </div>
          <div>
            <img src={weatherData.icon} alt='icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
