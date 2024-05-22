import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptSuggestions = () => {
  const { gptMovies, gptResult } = useSelector((store) => store.gpt);
  if (!gptMovies) return null;
  return (
    <div>
      {gptMovies.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptResult[index]}
        />
      ))}
    </div>
  );
};

export default GptSuggestions;
