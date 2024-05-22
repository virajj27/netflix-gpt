import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-1/4">{overview}</p>
      <div className="mt-5 flex flex-col md:flex-row">
        <button className="bg-white text-black w-1/4 md:w-auto px-4 p-2 md:px-12 md:p-4 text-md md:text-xl font-bold rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="hidden md:block mx-4 bg-gray-500 text-white px-12  text-md md:text-xl bg-opacity-50 rounded-lg">
          more info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
