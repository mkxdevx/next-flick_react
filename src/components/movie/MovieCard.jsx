import Link from "next/link";
import MovieSkeleton from "./MovieSkeleton";
import MoviePoster from "./MoviePoster";

const MovieCard = ({ movie, isLoading, from, query }) => {
  if (isLoading) {
    return <MovieSkeleton />;
  }

  if (!movie) {
    return (
      <div>
        <span>No movie found</span>
      </div>
    );
  }

  const ReleaseDate = movie.release_date?.slice(0, 4) || "Release Date Unknown";
  const params = new URLSearchParams({ from });

  if (query) {
    params.set("query", query);
  }

  return (
    <Link href={`/movie/${movie.id}?${params}`} className="movie">
      <MoviePoster
        moviePath={movie.poster_path}
        isLoading={isLoading}
        movieTitle={movie.title}
      />
      <h3 className="movie__title">{movie.title}</h3>
      <p className="movie__year">{ReleaseDate}</p>
    </Link>
  );
};

export default MovieCard;
