import { useState } from "react";
import Image from "next/image";
import posterUnavailable from "../../public/Poster-unavailable.png";

const MoviePoster = ({ movie, isLoading }) => {
  const [hasPosterError, setHasPosterError] = useState(false);
  if (isLoading) {
    return (
      <div
        className="movie__poster movie__poster--loading"
        aria-hidden="true"
      />
    );
  }
  return (
    <div>
      {movie.poster_path || !hasPosterError ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
          width={500}
          height={750}
          quality={75}
          priority
          className="movie__poster"
          onError={() => setHasPosterError(true)}
        />
      ) : (
        <Image
          src={posterUnavailable}
          alt={`${movie.title} poster`}
          width={500}
          height={750}
          quality={75}
          priority
          className="movie__poster"
          onError={() => setHasPosterError(true)}
        />
      )}
    </div>
  );
};

export default MoviePoster;
