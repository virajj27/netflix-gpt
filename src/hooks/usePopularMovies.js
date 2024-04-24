import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

//fetching now playing movies are returning them
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTIONS
      );
      if (data.status === 200) {
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
