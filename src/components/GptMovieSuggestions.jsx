import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utils/constants'
const GptMovieSuggestions = () => {
  const {movieResults,movieNames} = useSelector(store => store.gpt)
  console.log(movieResults)
  if (!movieNames) return null;
  return (
   <div className='  bg-black bg-opacity-80 mt-[8rem] md:mt-0 mx-[0.5rem] md:mx-[3rem]'>
     <div className=' p-5 my-10 '>
      {
        movieNames&&movieNames.map( (movie,index) => (
        
          <MovieList key={movie} title={movie} moviesList={movieResults[index]}/>
        ) )
      }
    </div>
   </div>
  )
}

export default GptMovieSuggestions
