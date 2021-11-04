import React, { useState } from 'react';

import './SearchBar.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <form className="search-form">
      <input
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBar;
