import { fetchTMDB } from "../../../lib/tmdb";
import MovieList from "../../components/movie/MovieList";

const Browse = async () => {

    const data = await fetchTMDB('genre/movie/list');
    const genre = data.genres;
    console.log(genre);



  return (
    <div>
      {genre.map((g) => (
        <MovieList key={g.id} genreId={g.id} genreName={g.name} />
      ))}
    </div>
  )
}

export default Browse