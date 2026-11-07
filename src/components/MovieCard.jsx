import Link from "next/link";
import MovieSkeleton from "./MovieSkeleton";
import MoviePoster from "./MoviePoster";

const MovieCard = ({ movie, isLoading, movieId }) => {
  const ReleaseDate =
    movie.release_date?.slice(0, 4) || "Release Date Unknown";

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

  return (
    <Link href={`/movie/${movieId}`} className="movie">
      <MoviePoster moviePath={movie.poster_path} isLoading={isLoading} movieTitle={movie.title} />
      <h3 className="movie__title">{movie.title}</h3>
      <p className="movie__year">{ReleaseDate}</p>
    </Link>
  );
};

export default MovieCard;
