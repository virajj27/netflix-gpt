import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%]  px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="mt-5">
        <button className="bg-white text-black px-12 p-4 text-xl font-bold  rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="mx-4 bg-gray-500 text-white px-12 p-4 text-xl bg-opacity-50 rounded-lg">
          more info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
