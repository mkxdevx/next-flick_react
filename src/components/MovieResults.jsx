"use client";

import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieResults = () => {
const [sortOption, setSortOption] = useState("");

  return (
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
          <div className="movies">
            <MovieCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieResults