import React, { useEffect } from 'react'
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies, errorFunction } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
const useTrendingMovies = () => {
  const {TrendingMovies} = useSelector(store => store.movie)
  const dispatch = useDispatch()
  const getTrendingMovies = async() => {
    try {
      const trendingData = await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?language=tel-IN&page=1",
        API_OPTIONS
      )
      const trendingJson = await trendingData.json()
      console.log(trendingJson)
      // console.log(json.results);
      dispatch(addTrendingMovies(trendingJson.results))
    } catch (error) {
      console.log(error)
      console.log(error.message);
      dispatch(errorFunction(error.message))
    }
  }
  useEffect(()=> {
    !TrendingMovies&&getTrendingMovies()
  },[])
 
}

export default useTrendingMovies
