import React from "react";
import netflixbg from "../assets/netflixbg.jpg";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
const GptSearch = () => {
  return (
    <>
      <div className=" fixed w-[100vw] h-[100vh]  -z-20 ">
          <img className=" object-cover  w-[100vw] h-[100vh] " src={netflixbg} alt="bg-logo" />
        </div>
      <div className="relative ">
        {/* <div className="w-full aspect-video absolute bg-black opacity-40 "></div> */}
      
        <div className="absolute h-[100vh] w-full flex justify-center top-[8rem] ">
          <GptSearchBar />
        </div>

        <div className='absolute top-[10rem] w-full  '>
        <GptMovieSuggestions/>
      </div>
      </div>
    </>
  );
};

export default GptSearch;
