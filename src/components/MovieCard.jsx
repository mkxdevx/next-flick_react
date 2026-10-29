import { useState } from "react";
import MovieSkeleton from "./MovieSkeleton";
import Image from "next/image";

const MovieCard = ({ movie, isLoading }) => {
  const [hasPosterError, setHasPosterError] = useState(false);

  if (isLoading) {
    return <MovieSkeleton />;
  }
  
  if (!movie) {
    return (
      <div>
        <span>No movie found</span>
      </div>
    )
  }

  return (
    <div className="movie">
      {movie.poster_path && !hasPosterError ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
          width={500}
          height={750}
          quality={100}
          priority
          className="movie__poster"
          onError={() => setHasPosterError(true)}
        />
      ) : (
        <div className="movie__poster movie__poster--missing" aria-hidden="true" />
      )}
      <h3 className="movie__title">{movie.title}</h3>
      <p className="movie__year">{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
