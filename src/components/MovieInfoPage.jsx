"use client";

import poster from "../assets/Poster-unavailable.png";
import Image from "next/image";
import MoviePoster from "./MoviePoster";

const MovieInfoPage = () => {
  const movie = {
    title: "Movie Title",
    year: 2024,
    description: "Movie description goes here.",
  };
  return (
    <div className="movie__info--container">
      <Image
        src={poster}
        alt="Movie Poster"
        width={300}
        height={400}
        quality={75}
        priority
      />
      {/* <MoviePoster /> */}
      <div className="movie__info--details">
        <h1 className="movie__info--title">{movie.title}</h1>
        <p className="movie__info--year">{movie.year}</p>
        <p className="movie__info--description">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieInfoPage;
