const MovieCard = () => {
  return (
    <div class="movie">
      <img
        src=""
        alt=""
        class="movie__poster"
        onerror="this.closest('.movie').remove()"
      />
      <h3 class="movie__title">Title</h3>
      <p class="movie__year">Year</p>
    </div>
  );
};

export default MovieCard;
