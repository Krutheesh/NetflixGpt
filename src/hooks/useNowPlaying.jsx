import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useNowPlaying = () => {
  const dispatch = useDispatch()
  const {nowPlayingMovies} = useSelector(store => store.movie)
  const getNowPlayingMovies = async() => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=tel-IN&page=1",
        API_OPTIONS
       
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
    } catch (error) {
      console.log(err.message);
    }
  }
  useEffect(()=> {
     getNowPlayingMovies()
  },[])
  
}

export default useNowPlaying
