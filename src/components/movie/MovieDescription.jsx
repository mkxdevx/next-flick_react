"use client";

import { useState } from "react";

const MovieDescription = ({ overview }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  if(overview.length <= 200) {
    return (
      <div className="movie__info--description">
        <div className="movie__info--text">
          <p>{overview}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="movie__info--description">
      <div className="movie__info--text">
        <p>{isExpanded ? overview : overview.slice(0, 200) + "..."}</p>
      </div>
      <button
        className="movie__description--button"
        onClick={toggleDescription}
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default MovieDescription