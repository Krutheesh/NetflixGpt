import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import { toggleGptSearch } from "../utils/gptSlice";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import Shimmer from "./Shimmer";
import Footer from "./Footer";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
const Browse = () => {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);
  const gpt = useSelector(store => store.gpt.showGptSearch)
  const {nowPlayingMovies,TrendingMovies,PopularMovies} = useSelector(store => store.movie)
  useNowPlaying();
  usePopularMovies();
  useTrendingMovies();
  

  
  return  PopularMovies? <div>
    <Header/>
    {
      gpt?<div className="bg-black"> <MainContainer/> 
      <SecondaryContainer/><Footer/></div> :<GptSearch/>
    }
    
    </div>: <Shimmer/>
};

export default Browse;
