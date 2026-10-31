const DiscoverMovies = async () => {
  const discoverMovies = await fetch("/api/discover/movie").then((res) => res.json());
  return (
    <div className="no-results">
      Discover Movies Component
    </div>
  );
};

export default DiscoverMovies;
