import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Display = ({ weatherData, loading }) => {
  return (
    <div>
      {loading ? (
        <div className='flex flex-col justify-center items-center'>
          <CircularProgress color='secondary' />
        </div>
      ) : (
        <div className=' flex flex-col justify-center items-center text-yellow-100 mt-8  rounded-xl  '>
          <h1 className='text-5xl place uppercase p-3 mb-6'>
            {weatherData.name}
          </h1>
          <div className='image h-full w-44  mb-5 p-4'>
            <img src={weatherData.icon} className='icon w-44 ' alt='icon' />
          </div>
          <div className='mb-5 flex flex-col justify-center items-center'>
            <h2 className='text-5xl'>{weatherData.temperature}°c</h2>
            <h3 className='text-2xl'>{weatherData.description}</h3>
            <h3 className='text-2xl'>Humid: {weatherData.humidity}</h3>
            <h2>{weatherData.time.slice(11)}</h2>
          </div>
          <h2 className='text-lg p-4'>
            {weatherData.country}, {weatherData.region}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Display;
