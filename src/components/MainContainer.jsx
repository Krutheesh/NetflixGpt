import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import MovieInfo from './MovieInfo'
import VideoCard from './VideoCard'
import Shimmer from './Shimmer'
import { addMovieTrailer } from '../utils/movieSlice'
const MainContainer = () => {
  const dispatch = useDispatch()
  const movies = useSelector(store => store.movie?.nowPlayingMovies);
  

  if(!movies) return
  
  const mainMovie = movies[0]
  // console.log("--------------------------------------")
  // console.log(mainMovie)
  const {original_title,overview, id} = mainMovie
//  console.log(id)
  
  
  return (
   <div className='pt-[4rem] md:pt-0 bg-black  '>
      <MovieInfo title={original_title} overView={overview}/>
      <VideoCard movieId={id}/>
      
    </div>
  )
}

export default MainContainer
