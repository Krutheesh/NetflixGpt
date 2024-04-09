import React, { useEffect } from 'react'
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies, errorFunction } from "../utils/movieSlice";
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
       console.log(popularJson)
      dispatch(addPopularMovies(popularJson.results))
    } catch (error) {

      console.log(error.message);
      dispatch(errorFunction(error.message))
    }
  }
  useEffect(()=> {
    !PopularMovies&&getPopularMovies()
  },[])

}

export default usePopularMovies
