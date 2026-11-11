import { fetchTMDB } from "../../lib/tmdb";
import MovieCard from "./movie/MovieCard";

const RelatedMovies = async ({ movie }) => {
  const movieCollectionId = movie.belongs_to_collection?.id;

  if (!movieCollectionId) {
    return null;
  }

  const collection = await fetchTMDB(`collection/${movieCollectionId}`);
  const filteredMovies = (collection.parts ?? []).filter(
    (collectionMovie) => collectionMovie.id !== movie.id,
  );
  
  if (filteredMovies.length === 0) {
    return null;
  }

  return <section className="related-movies">
    <h2 className="related-movies__title">Related Movies</h2>
    <div className="movies">
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
      ))}
    </div>
  </section>;
};

export default RelatedMovies;
