
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
    <div className="movie__poster--wrapper">
      <Image
        src={posterSrc}
        alt={`${movieTitle} poster`}
        width={large ? 400 : 200}
        height={large ? 600 : 300}
        quality={75}
        priority
        className="movie__poster"
      />
    </div>
  );
};

export default MoviePoster;
