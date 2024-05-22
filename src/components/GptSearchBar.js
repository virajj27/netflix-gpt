import React, { useRef } from "react";
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { openai } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.currLang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie in tmdb
  const fetchGptMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleSearchClick = async () => {
    try {
      const gptQuery =
        "Act as a movie recommendation system and suggest five movies for the query:" +
        searchText.current.value +
        ". only give me names of five movies ,comma seperated like the example shown ahead,example output: gadar,sholay,hum saath saath hai,koi mil gya,hum aapke hai kaun";
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      //["gadar","sholay","hum saath saath hai","koi mil gya","hum aapke hai kaun"] after splitting on ,
      const gptMovies = gptResults?.choices?.[0].message?.content.split(",");

      //for each movie we will search tmdb api
      const promiseArray = gptMovies.map((movie) => fetchGptMovies(movie));
      //above line will return a array of promises
      //like-:[promise,promise,promise,promise,promise]
      const tmdbResults = await Promise.all(promiseArray); //when all promises will be resolved
      //only then we will get tmdbresults
      dispatch({ movieName: gptMovies, movieResult: tmdbResults });
    } catch (error) {
      throw new Error(error.message);
    }
  };
  return (
    <div className="bg-black pt-[20%]  md:p-0">
      <form
        className="flex flex-col  md:flex-row justify-center items-center py-48 space-y-4 md:space-x-4 md:space-y-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          placeholder={lang[langKey].searchPlaceholder}
          type="text"
          className="p-8 md:p-6   md:w-2/5  border border-black rounded-md text-center font-bold text-lg"
        />
        <button
          className="p-6 text-white bg-red-700  rounded-md font-bold "
          onClick={handleSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
