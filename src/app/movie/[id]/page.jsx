"use client";

import { fetchTMDB } from "../../../../lib/tmdb";
import MoviePoster from "../../../components/MoviePoster";
import Image from "next/image";
import poster from "../../../assets/Poster-unavailable.png";

export default async function MovieInfo({ params }) {
  const { id } = await params;
  const movie = await fetchTMDB(`movie/${id}`);
    const movieReleaseDate =
      movie.release_date?.slice(0, 4) || "Release Date Unknown";

  return (
    <>
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
          style={{ objectFit: "cover" }}
          quality={75}
          priority
        />
        <div className="icon__overlay">
          <i className="fa-solid fa-arrow-left fa-2x"></i>
          </div>
          
          <MoviePoster
            moviePath={movie.poster_path}
            movieTitle={movie.title}
            isLoading={false}
            large
            className="movie__poster--overlay"
          />
      </div>
      <div className="movie__info--container">
        <div className="row">
          <div className="movie__info--details">
            <h1 className="movie__info--title">{movie.title}</h1>
            <p className="movie__info--year">{movieReleaseDate}</p>
            <p className="movie__info--description">{movie.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
}
