import React from "react";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.currLang);
  console.log(langKey);
  return (
    <div className="bg-black ">
      <form className=" ml-[30%] py-32" onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder={lang[langKey].searchPlaceholder}
          type="text"
          className="p-6 w-2/5 m-12 border border-black rounded-md text-center font-bold text-lg"
        />
        <button className="p-6 text-white bg-red-700  rounded-md font-bold">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
