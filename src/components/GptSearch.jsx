import React from "react";
import netflixbg from "../assets/netflixbg.jpg";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { useSelector } from "react-redux";
import ListShimmer from "./ListShimmer";
const GptSearch = () => {
  const {isLoading} = useSelector(store => store.gpt)
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
        {isLoading?<div className="bg-black bg-opacity-80 mt-10 mx-5 flex flex-col"> <ListShimmer/> <ListShimmer/> <ListShimmer/> <ListShimmer/> </div> :<GptMovieSuggestions/>}
      </div>
      </div>
    </>
  );
};

export default GptSearch;
