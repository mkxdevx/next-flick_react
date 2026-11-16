import { fetchTMDB } from "../../../lib/tmdb"
import MovieCard from "./MovieCard"


const MovieList = async ({ genreId, genreName }) => {
  const data = await fetchTMDB("discover/movie", new URLSearchParams({ with_genres: String(genreId) }).toString());
  const movies = data.results;

  return (
    <div className="genre__container">
      <div className="genre__title">
        <h2>{genreName}</h2>
      </div>
      <div className="genre__movie--list">
        <div className="genre__movie--wrapper">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} movieId={movie.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList;