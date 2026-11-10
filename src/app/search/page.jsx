import SearchForm from "../../components/search/SearchForm";
import SearchResults from "../../components/search/SearchResults";
import { fetchTMDB } from "../../../lib/tmdb";

export default async function Search({ searchParams }) {
  const params = await searchParams;
  const queryParam = params.query;
  const query = Array.isArray(queryParam)
    ? (queryParam[0]?.trim() ?? "")
    : (queryParam?.trim() ?? "");
  let movies = [];

  if (query) {
    const data = await fetchTMDB(
      "search/movie",
      new URLSearchParams({ query }).toString(),
    );
    movies = data.results ?? [];
  }

  return (
    <>
      <section id="search">
        <div className="container">
          <div className="row">
            <div className="search__header">
              <h1 className="search__header--title">
                Discover your Next Watch!
              </h1>
              <SearchForm
                query={query}
                formClassName="search__bar"
                placeholder="Find your movie..."
                buttonClassName="search__btn"
                inputClassName="search__input"
              />
            </div>{" "}
          </div>
        </div>
      </section>
      <SearchResults query={query} movies={movies} />
    </>
  );
}
