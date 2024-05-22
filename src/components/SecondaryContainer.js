import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black ">
      <div className="mt-0 md:-mt-52 pl-6 md:pl-12 relative z-10 w-screen aspect-video">
        <MovieList title={"now playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"popular"} movies={movies?.popularMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
