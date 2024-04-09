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
  const {nowPlayingMovies,TrendingMovies,PopularMovies,error} = useSelector(store => store.movie)
 
    useNowPlaying();
    usePopularMovies();
    useTrendingMovies();
  
 
  

  
  return ( 
    
   !error? (PopularMovies? <div>
    <Header/>
    {
      gpt?<div className="bg-black"> <MainContainer/> 
      <SecondaryContainer/><Footer/></div> :<GptSearch/>
    }
    
    </div>: <Shimmer/>):<div className="flex flex-col justify-center items-center">
      <p className="text-[2rem] p-3"> {error}  </p>
<p className="text-[2rem] w-[80%] md:w-[60%] border m-5 p-5 shadow-lg">Sometimes, when the TMDB API is not working, you may be unable to view the website. However, you can watch a video on my LinkedIn post demonstrating how the website works.</p>
      

      <iframe className="" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7151266282158346240" height="1610" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
    </div>
    
  )
};

export default Browse;
