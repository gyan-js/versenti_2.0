import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`)
 }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search-filed" className='sr-only'>
        Search your songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <AiOutlineSearch />
        <input name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white p-4"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={handleSubmit}
          />
      </div>
    </form>
  );
};

export default Searchbar;