import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie)
  
  return (
    
    <div className='bg-black '>
      <div className='bg-transparent space-y-5 px-10 mt-[-10rem] relative z-[10]'>
      <MovieList title={"Now Playing"} moviesList={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} moviesList={movies.TrendingMovies}/>
      <MovieList title={"Popular"} moviesList={movies.PopularMovies}/>
      </div>
     

    </div>
  )
}

export default SecondaryContainer
