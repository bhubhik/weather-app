import React from 'react';

const SearchBox = ({ handleSearch, search, setSearch }) => {
  return (
    <div className='flex min-w-full justify-center items-center w-2/3 '>
      <form
        className='w-8/12 flex justify-center items-center'
        onSubmit={handleSearch}
      >
        <input
          placeholder='eg. (Miranda, Australia) or, (Adelaide)'
          className='bg-white p-3 m-2 w-8/12 border-4 border-blue-500 border-opacity-50 shadow-xl outline-none '
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className='inline-flex text-white hover:text-blue-500 bg-blue-500 hover:bg-white rounded-lg text-center h-auto w-auto p-3 m-2 search-btn focus:outline-none'
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
