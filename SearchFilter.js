import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearchChange = e => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearchChange}
      placeholder="Search profiles..."
    />
  );
};

export default SearchFilter;
