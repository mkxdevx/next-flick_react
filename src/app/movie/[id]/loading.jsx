import Image from "next/image";


const loading = () => {
  return (
    <div className="movie-page-layout row">
      <div className="movie__detail--layout">
        <div className="movie__backdrop">
          <div className="movie__backdrop--loading" aria-hidden="true" />
          <i className="fa-solid fa-circle-left fa-3x icon__overlay">
            <div className="icon__overlay--inner" />
          </i>
        </div>
        <div className="poster__alternative">
          <div
            className="movie__poster movie__poster--loading"
            aria-hidden="true"
          />
          <div className="poster__back-link">
            <i className="fa-solid fa-circle-left fa-3x icon__overlay">
              <div className="icon__overlay--inner" />
            </i>
            <div className="icon__overlay--text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default loading