import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.popularMovies);
  return (
    <div className="bg-black ">
      <div className="-mt-52 pl-12 relative z-10 w-screen aspect-video">
        <MovieList title={"now playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"popular"} movies={movies?.popularMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
