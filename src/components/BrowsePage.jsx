"use client";

import poster from "../assets/Poster-unavailable.png";
import Image from "next/image";
import MoviePoster from "./MoviePoster";

const BrowsePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div>
          <i className="fa-solid fa-arrow-left fa-2x"></i>
          <div>
            <Image
              src={poster}
              alt="Movie Poster"
              width={500}
              height={750}
              quality={75}
              priority
            />
            {/* <MoviePoster /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;
