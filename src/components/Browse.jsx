import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies,addPopularMovies,addTrendingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import { toggleGptSearch } from "../utils/gptSlice";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
const Browse = () => {
  const dispatch = useDispatch()
  const gpt = useSelector(store => store.gpt.showGptSearch)
  const {nowPlayingMovies,TrendingMovies,PopularMovies} = useSelector(store => store.movie)
  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=tel-IN&page=1",
        API_OPTIONS
       
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
      const trendingData = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=tel-IN&page=1",
        API_OPTIONS
      )
      const trendingJson = await trendingData.json()
      
      // console.log(json.results);
      dispatch(addTrendingMovies(trendingJson.results))
       const popularData = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=tel-IN&page=1",
        API_OPTIONS
       )
       const popularJson = await popularData.json()
      dispatch(addPopularMovies(popularJson.results))
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
   !(nowPlayingMovies&&TrendingMovies&&PopularMovies) &&getNowPlayingMovies();
  }, []);
  return <div>
    <Header/>
    {
      gpt?<> <MainContainer/> 
      <SecondaryContainer/></> :<GptSearch/>
    }
    
    </div>;
};

export default Browse;
