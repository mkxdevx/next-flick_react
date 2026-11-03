import MovieSkeleton from "./MovieSkeleton";
import MoviePoster from "./MoviePoster";

const MovieCard = ({ movie, isLoading, onSelect }) => {
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
    <div className="movie" onClick={onSelect}>
      <MoviePoster moviePath={movie.poster_path} isLoading={isLoading} movieTitle={movie.title} />
      <h3 className="movie__title">{movie.title}</h3>
      <p className="movie__year">{ReleaseDate}</p>
    </div>
  );
};

export default MovieCard;
