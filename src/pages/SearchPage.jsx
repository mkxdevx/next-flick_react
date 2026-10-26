const SearchPage = () => {
  return (
    <div>
      <section id="search">
        <div class="container">
          <div class="row">
            <div class="search__header">
              <h1 class="search__header--title">Discover your Next Watch!</h1>
              <div class="search__bar">
                <input
                  type="text"
                  placeholder="Search movies..."
                  class="search__input"
                ></input>
                <button class="search__btn" onclick="handleSearch(event)">
                  <i class="fa-solid fa-magnifying-glass search__icon--default"></i>
                  <i class="fa-solid fa-circle-notch search__icon--loading"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="results">
        <div class="container">
          <div class="row">
            <div class="results__header">
              <h1 class="results__header--title">Search Results:</h1>
              <select id="filter" onchange="handleFilterChange(event)">
                <option value="" disabled selected>
                  Sort by
                </option>
                <option value="A_TO_Z">Sort A-Z</option>
                <option value="Z_TO_A">Sort Z-A</option>
                <option value="NEW_TO_OLD">Sort newest to oldest</option>
                <option value="OLD_TO_NEW">Sort oldest to newest</option>
              </select>
            </div>
            <div class="movies">
              <div class="movie">
                <img
                  src=""
                  alt=""
                  class="movie__poster"
                  onerror="this.closest('.movie').remove()"
                />
                <h3 class="movie__title">Title</h3>
                <p class="movie__year">Year</p>
              </div>
              <div class="movie__skeleton">
                <div class="skeleton skeleton__img"></div>
                <div class="skeleton skeleton__movie--title"></div>
                <div class="skeleton skeleton__movie--year"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchPage;
