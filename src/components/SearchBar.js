import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from './movieActions';
import './SearchBar.css';
import Navbar from './Navbar';  // Import the Navbar component
import show from './show';  

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query) dispatch(searchMovies(query));
  };

  return (
    <div className="main-container">
      <Navbar />  {/* Add Navbar to the page */}

      <header className="header">
        <h1>Movie Recommendation Application</h1>
      </header>

      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <show />  
    </div>
  );
};

export default SearchBar;
