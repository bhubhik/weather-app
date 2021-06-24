import React from 'react';
import SearchBox from './searchBox';

const Display = ({ weatherData }) => {
  return (
    <div>
      <div className=' flex justify-center items-center  h-24 outline-none'>
        <SearchBox />
      </div>
      <div className=' flex flex-col justify-center items-center text-yellow-300 mt-8  rounded-xl  '>
        <h1 className='text-5xl place uppercase p-3 mb-6'>
          {weatherData.name}
        </h1>
        <div className='image h-full w-44  mb-5 p-4'>
          <img src={weatherData.icon} className='icon w-44 ' alt='icon' />
        </div>
        <div className='mb-5 flex flex-col justify-center items-center'>
          <h2 className='text-4xl'>{weatherData.temperature}°c</h2>
          <h3 className='text-lg'>{weatherData.description}</h3>
        </div>
        <h2 className='text-lg p-4'>
          {weatherData.country}, {weatherData.region}{' '}
        </h2>
      </div>
    </div>
  );
};

export default Display;
