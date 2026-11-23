
const loading = () => {
  return (
    <>
      <p role="status" className="visually-hidden">
        Loading movie details...
      </p>
      <div className="movie-page-layout row" aria-hidden="true">
        <div className="movie__detail--layout">
          <div className="movie__backdrop">
            <div className="movie__backdrop--skeleton" aria-hidden="true" />
            <i className="fa-solid fa-circle-left fa-3x icon__overlay">
              <div className="icon__overlay--inner" />
            </i>
          </div>
          <div className="poster__alternative">
            <div
              className="movie__poster movie__poster--skeleton"
              aria-hidden="true"
            />
            <div className="poster__back-link">
              <i className="fa-solid fa-circle-left fa-3x icon__overlay">
                <div className="icon__overlay--inner" />
              </i>
              <div className="icon__overlay--text">Back</div>
            </div>
          </div>
          <div className="movie__info-column">
            <div className="movie__info--container">
              <div className="movie__info--details">
                <h1 className="movie__info--title skeleton skeleton__large--title" />
                <div className="movie__info--list">
                  <div className="movie__info--year skeleton skeleton__movie--short-text" />
                  <hr className="vertical" />
                  <div className="movie__info--runtime skeleton skeleton__movie--short-text" />
                  <hr className="vertical" />
                  <div className="movie__info--rating movie__skeleton--rating">
                    {new Array(5).fill(null).map((_, i) => (
                      <i key={i} className="fa-solid fa-star" />
                    ))}
                  </div>
                </div>
                <div className="movie__info--description">
                  <div className="movie__info--text skeleton skeleton__movie--long-text" />
                  <div className="movie__info--text skeleton skeleton__movie--long-text" />
                  <div className="movie__info--text skeleton skeleton__movie--short-text" />
                </div>
              </div>
            </div>
            <div className="related-movies">
              <h2 className="related-movies__header">Related Movies</h2>
              <div className="movies">
                {new Array(5).fill(null).map((_, i) => (
                  <div key={i} className="movie__skeleton">
                    <div className="skeleton skeleton__img" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default loading