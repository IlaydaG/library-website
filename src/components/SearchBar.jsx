import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-10">
        <input
            type="text"
            className="form-control"
            placeholder="Kitap ara..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch(e.target.value); 
            }}
        />
    </div>
  );
}

export default SearchBar;