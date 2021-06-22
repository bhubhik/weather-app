import React from 'react';

const SearchBox = () => {
  return (
    <div className='   flex justify-center items-center w-2/3  '>
      <input
        placeholder='City Name'
        className='bg-white p-3 m-2 w-8/12 border-4 border-blue-500 border-opacity-50 shadow-xl outline-none '
      />
      <button className='inline-flex text-white hover:text-blue-500 bg-blue-500 hover:bg-white rounded-lg text-center h-auto w-auto p-3 m-2 search-btn focus:outline-none'>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
