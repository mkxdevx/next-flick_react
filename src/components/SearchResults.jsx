"use client";

import { useMemo, useState } from "react";
import MovieCard from "./MovieCard";

const SearchResults = ({ query, movies }) => {
  const [sortOrder, setSortOrder] = useState("");

  const sortedMovies = useMemo(() => {
    const results = [...movies];

    switch (sortOrder) {
      case "A_TO_Z":
        return results.sort((a, b) => a.title.localeCompare(b.title));
      case "Z_TO_A":
        return results.sort((a, b) => b.title.localeCompare(a.title));
      case "NEW_TO_OLD":
        return results.sort((a, b) =>
          (b.release_date ?? "").localeCompare(a.release_date ?? ""),
        );
      case "OLD_TO_NEW":
        return results.sort((a, b) =>
          (a.release_date ?? "").localeCompare(b.release_date ?? ""),
        );
      default:
        return results;
    }
  }, [movies, sortOrder]);

  return (
    <section id="results">
      <div className="container">
        <div className="row">
          <div className="results__header">
            <h1 className="results__header--title">
              Search Results:
              {query && (
                <span className="results__header--query"> "{query}"</span>
              )}
            </h1>
            <select
              id="filter"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
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
          {!query ? (
            <div className="movie__no-results">
              <p>Search for movies to see results</p>
            </div>
          ) : sortedMovies.length === 0 ? (
            <div className="movie__no-results">
              <p>No movies found</p>
            </div>
          ) : (
            <div className="movies">
              {sortedMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchResults;
