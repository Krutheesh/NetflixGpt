import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utils/constants'
const MovieList = ({title,moviesList}) => {

console.log(moviesList)
  return (
    <div className='text-white '>
      <h1 className='font-semibold py-2'>{title}</h1>
      <div className='flex overflow-x-auto no-scrollbar'>
      <div className='flex  '>
        {
         moviesList&&moviesList.map(movie => (
            
          movie.poster_path ?<div key={movie.id} className='w-[7rem] m-3'> <img src={IMG_CDN_URL+movie.poster_path} alt={movie.title} />  </div>:""
           
         
          ))
        }
      </div>
      </div>
      
    </div>
  )
}

export default MovieList
