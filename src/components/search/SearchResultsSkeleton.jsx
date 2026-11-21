const SearchResultsSkeleton = () => {
  return (
    <section id="results">
      <div className="container">
        <div className="row">
          <div className="results__header">
            <h1 className="results__header--title">Search Results:</h1>
            <select id="filter" disabled>
              <option value="" disabled selected>
                Sort by
              </option>
              <option value="A_TO_Z">Sort A-Z</option>
              <option value="Z_TO_A">Sort Z-A</option>
              <option value="NEW_TO_OLD">Sort newest to oldest</option>
              <option value="OLD_TO_NEW">Sort oldest to newest</option>
            </select>
          </div>
          <div className="movies">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="skeleton movie__skeleton">
                <div className="skeleton__img skeleton" />
                <div className="skeleton skeleton__movie--short-text" />
                <div className="skeleton skeleton__movie--shorter-text" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResultsSkeleton;
