const loading = () => {
  return (
    <div>
      {new Array(3).fill(0).map((_, index) => (
        <div className="genre__container" key={index}>
          <div className="genre__title">
            <h2>Loading movies...</h2>
          </div>
          <div className="genre__movie--list">
            <div className="genre__movie--wrapper">
              {new Array(10).fill(0).map((_, index) => (
                <div className="movie movie__skeleton" key={index}>
                  <div className="skeleton skeleton__img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default loading;
