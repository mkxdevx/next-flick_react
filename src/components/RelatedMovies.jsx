import { fetchTMDB } from "../../lib/tmdb";
import MovieCard from "./movie/MovieCard";

const RelatedMovies = async ({ movie }) => {
  const maxMovies = 4;
  let relatedMovies = [];

  if (movie.belongs_to_collection?.id) {
    const collection = await fetchTMDB(
      `collection/${movie.belongs_to_collection.id}`,
    );

    relatedMovies = (collection.parts ?? []).filter(
      (item) => item.id !== movie.id,
    );
  }

  if (relatedMovies.length < maxMovies) {
    const similar = await fetchTMDB(`movie/${movie.id}/similar`);
    const existingIds = new Set(relatedMovies.map((item) => item.id));

    const additionalMovies = (similar.results ?? []).filter(
      (item) => item.id !== movie.id && !existingIds.has(item.id),
    );

    relatedMovies = [...relatedMovies, ...additionalMovies];
  }

  relatedMovies = relatedMovies.slice(0, maxMovies);

  if (relatedMovies.length === 0) {
    return null;
  }

  return (
    <section className="related-movies">
      <h2 className="related-movies__header">Related Movies</h2>
      <div className="movies">
        {relatedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
        ))}
      </div>
    </section>
  );
};

export default RelatedMovies;
