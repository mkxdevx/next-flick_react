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
        <p>{overview}</p>
      </div>
    );
  }

  return (
    <div className="movie__info--description">
      <p>{isExpanded ? overview : overview.slice(0, 200) + "..."}</p>
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