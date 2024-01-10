import React, { useEffect } from 'react'
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
const usePopularMovies = () => {
  const dispatch = useDispatch()
  const {PopularMovies} = useSelector(store => store.movie)
  const getPopularMovies = async() => {
    try {
      const popularData = await fetch(
        "https://api.themoviedb.org/3/tv/popular?language=tel-IN&page=1",
        API_OPTIONS
       )
       const popularJson = await popularData.json()
      dispatch(addPopularMovies(popularJson.results))
    } catch (error) {
      console.log(err.message);
    }
  }
  useEffect(()=> {
    !PopularMovies&&getPopularMovies()
  },[])

}

export default usePopularMovies
