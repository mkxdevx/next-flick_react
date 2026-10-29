import MovieResults from "./MovieResults";

const MovieSearch = () => {
  return (
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
              <button
                className="search__btn"
                onClick={console.log("handleSearch(event)")}
              >
                <i className="fa-solid fa-magnifying-glass search__icon--default"></i>
                <i className="fa-solid fa-circle-notch search__icon--loading"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieSearch;
