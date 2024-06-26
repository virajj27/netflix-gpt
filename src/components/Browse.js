import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const gpt = useSelector((store) => store.gpt);

  //fetch data from TMDB API and update our store
  useNowPlayingMovies();

  usePopularMovies();
  return (
    <div className="relative">
      <Header />
      {gpt.showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* main container
    hero section big video playing automatically(recommended movie)
    sub container
    rows of suggested movies *n */}
    </div>
  );
};

export default Browse;
