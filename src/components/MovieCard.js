import React from "react";
import { MOVIE_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="movie_poster" src={MOVIE_POSTER_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
