const MovieCard = ({ movie }) => {
  if (!movie) {
    return (
      <div>
        <span>No movie found</span>
      </div>
    )
  }
  
  return (
    <div className="movie"> 
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt=""
        className="movie__poster"
        onError={(e) => e.target.closest('.movie').remove()}
      />
      <h3 className="movie__title">{movie.title}</h3>
      <p className="movie__year">{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
