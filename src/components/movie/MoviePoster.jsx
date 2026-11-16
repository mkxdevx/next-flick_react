
import Image from "next/image";
import posterUnavailable from "../../../src/assets/Poster-unavailable.png";

const MoviePoster = ({ moviePath, isLoading, movieTitle, large }) => {
  const posterSrc = moviePath
    ? `https://image.tmdb.org/t/p/w500${moviePath}`
    : posterUnavailable;

  if (isLoading) {
    return (
      <div
        className="movie__poster movie__poster--loading"
        aria-hidden="true"
      />
    );
  }
  return (
    <div
      className={`movie__poster--wrapper${large ? " movie__poster--wrapper-large" : ""}`}
    >
      <Image
        src={posterSrc}
        alt={`${movieTitle} poster`}
        fill
        sizes={
          large
            ? "(min-width: 1286px) min(35vw, 464px), (min-width: 1026px) min(35vw, 430px), 1px"
            : "(max-width: 220px) 100vw, 220px"
        }
        quality={75}
        priority
        className="movie__poster"
      />
    </div>
  );
};

export default MoviePoster;
