import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_CDN_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
const MovieList = ({title,moviesList}) => {

// console.log(moviesList)
  return (
    <div className='text-white '>
      <h1 className='font-semibold py-2'>{title}</h1>
      <div className='flex overflow-x-auto no-scrollbar'>
      <div className='flex  '>
        {
         moviesList&&moviesList.map(movie => (
            
          movie.poster_path ?<div key={movie.id} className='w-[7rem] bg-zinc-800  m-2'> <Link to={`/${movie.id}`}> <img src={IMG_CDN_URL+movie.poster_path} alt={movie.title} /></Link>   </div>:""
           
         
          ))
        }
      </div>
      </div>
      
    </div>
  )
}

export default MovieList
