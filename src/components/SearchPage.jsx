"use client";
import { useState } from "react";
import MovieCard from "./MovieCard";

const SearchPage = () => {
  const [sortOption, setSortOption] = useState("");
  return (
    <div>
      <section id="search">
        <div className="container">
          <div className="row">
            <div className="search__header">
              <h1 className="search__header--title">Discover your Next Watch!</h1>
              <div className="search__bar">
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="search__input"
                ></input>
                <button className="search__btn" onClick={console.log("handleSearch(event)")}>
                  <i className="fa-solid fa-magnifying-glass search__icon--default"></i>
                  <i className="fa-solid fa-circle-notch search__icon--loading"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="results">
        <div className="container">
          <div className="row">
            <div className="results__header">
              <h1 className="results__header--title">Search Results:</h1>
              <select id="filter" value={sortOption} onChange={(event) => setSortOption(event.target.value)}>
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
    </div>
  );
};

export default SearchPage;
