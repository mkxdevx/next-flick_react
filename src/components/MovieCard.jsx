const MovieCard = () => {
  return (
    <div className="movie">
      <img
        src={`https://via.placeholder.com/300x450?text=Movie+Poster`}
        alt=""
        className="movie__poster"
        onError={(e) => e.target.closest('.movie').remove()}
      />
      <h3 className="movie__title">Title</h3>
      <p className="movie__year">Year</p>
    </div>
  );
};

export default MovieCard;
