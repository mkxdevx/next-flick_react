const DiscoverMovies = async () => {
  const discoverMovies = await fetch("/api/discover/movie").then((res) => res.json());
  console.log(discoverMovies);
  return (
    <div className="no-results">
      Discover Movies Component
    </div>
  );
};

export default DiscoverMovies;
