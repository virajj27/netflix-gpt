import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  //fetch data from TMDB API and update our store
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/* main container
    hero section big video playing automatically(recommended movie)
    sub container
    rows of suggested movies *n */}
    </div>
  );
};

export default Browse;
