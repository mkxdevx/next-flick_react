import { useState } from "react";
import MovieSkeleton from "./MovieSkeleton";
import MoviePoster from "./MoviePoster";

const MovieCard = ({ movie, isLoading }) => {
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

  const movieReleaseDate = movie.release_date?.slice(0,4) || "Release Date Unknown";

  return (
    <div className="movie">
      <MoviePoster movie={movie} isLoading={isLoading} />
      <h3 className="movie__title">{movie.title}</h3>
      <p className="movie__year">{movieReleaseDate}</p>
    </div>
  );
};

export default MovieCard;
