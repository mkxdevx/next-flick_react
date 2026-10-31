"use client";

import { useState } from "react";
import MovieCard from "./MovieCard";
import DiscoverMovies from "./DiscoverMovies";

const SearchPage = () => {
  const [sortOption, setSortOption] = useState("");
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();

    const searchQuery = query.trim();

    if (!searchQuery) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        `/api/movies?query=${encodeURIComponent(searchQuery)}`,
      );
      const data = await response.json();

      if (!response.ok) {
        console.error("Error searching movies:", data.error);
        setMovies([]);
        return;
      }

      setMovies(data.results ?? []);
    } catch (error) {
      console.error("Error searching movies:", error);
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <section id="search">
        <div className="container">
          <div className="row">
            <div className="search__header">
              <h1 className="search__header--title">
                Discover your Next Watch!
              </h1>
              <form className="search__bar" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="search__input"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                ></input>
                <button className="search__btn" type="submit">
                  <i className="fa-solid fa-magnifying-glass search__icon--default"></i>
                  <i className="fa-solid fa-circle-notch search__icon--loading"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section id="results">
        <div className="container">
          <div className="row">
            <div className="results__header">
              <h1 className="results__header--title">Search Results:</h1>
              <select
                id="filter"
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
              >
                <option value="" disabled>
                  Sort by
                </option>
                <option value="A_TO_Z">Sort A-Z</option>
                <option value="Z_TO_A">Sort Z-A</option>
                <option value="NEW_TO_OLD">Sort newest to oldest</option>
                <option value="OLD_TO_NEW">Sort oldest to newest</option>
              </select>
            </div>
            {movies.length === 0 ? (
              <div className="movie__no-results">
                <p>No movies found</p>
              </div>
            ) : (
              <div className="movies">
                {movies.map((movie) => {
                  console.log(movie);
                  return (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      isLoading={isLoading}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
