import { fetchTMDB } from "../../../../lib/tmdb";
import Link from "next/link";
import Image from "next/image";
import poster from "../../../assets/Poster-unavailable.png";

export default async function MovieInfo({ params }) {
  const { id } = await params;
  const movie = await fetchTMDB(`movie/${id}`);
  console.log(movie)
  const movieReleaseDate =
    movie.release_date?.slice(0, 4) || "Release Date Unknown";

  const movieRatingStars = () => {
    const rating = movie.vote_average;
    const stars = [];
    for (let star = 1; star <= 5; star++) {
      if (rating >= star * 2) {
        stars.push(<i key={star} className="fa-solid fa-star" />);
      } else if (rating >= star * 2 - 1) {
        stars.push(<i key={star} className="fa-solid fa-star-half-stroke" />);
      } else {
        stars.push(<i key={star} className="fa-regular fa-star" />);
      }
    }
    return stars;
  };

  return (
    <div className="movie__detail--layout">
        <div className="movie__backdrop">
          <Image
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                : poster
            }
            alt={`${movie.title} backdrop`}
            fill
            sizes="100vw"
            style={{ objectFit: "contain", objectPosition: "center top" }}
            quality={75}
            priority
          />

          <Link href="/search">
            <i className="fa-solid fa-circle-left fa-3x icon__overlay">
              <div className="icon__overlay--inner" />
            </i>
          </Link>
        </div>
        <div className="movie__info--container">
          <div className="movie__info--details">
            <h1 className="movie__info--title">{movie.title}</h1>
            <div className="movie__info--list">
              <p className="movie__info--year">{movieReleaseDate}</p>
              <hr className="vertical" />
              <p className="movie__info--runtime">{movie.runtime} min</p>
              <hr className="vertical" />
              <p className="movie__info--rating ">{movieRatingStars()}</p>
            </div>
            <p className="movie__info--description">{movie.overview}</p>
          </div>
        </div>
    </div>
  );
}
