// d9d41563 omDb api key

import React, { useState, useEffect } from "react";

import MovieCard from "./Moviecard";
import SearchIcon from "./search.svg";
import "./App.css";
import Nav from "./nav";

const API_URL = "https://www.omdbapi.com?apikey=d9d41563";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("disney");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div>
      <Nav></Nav>
      <div className="app">
        {/* <h1>Movie Mania</h1> */}

        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        <div>
          <h2>Recommended for you </h2>
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
