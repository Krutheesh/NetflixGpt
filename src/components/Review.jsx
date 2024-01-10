import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addMovieReview} from '../utils/movieSlice'
import { FaRegUserCircle } from "react-icons/fa";
import ReadMore from './ReadMore';

const Review = ({movieId}) => {
  const dispatch = useDispatch()
  const {movieReview} = useSelector(store => store.movie)
 const fetchReviews = async() => {
  try{
  const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/reviews?language=en-US&page=1', API_OPTIONS)
  const movieReviews = await data.json()

  dispatch(addMovieReview(movieReviews.results))
  }
  catch(err){
  console.log(err.code,err.message)
  }
 }
  useEffect(() => {
      fetchReviews()
  },[movieId])
  return (
    <div className='text-white '>
      { (movieReview&&movieReview.length)? movieReview.map(review => (
        <div key={review?.id} className='my-5 p-5 bg-slate-800 rounded-xl'>
            <div className='flex items-center space-x-10'> <p className='flex items-center t'> <span className='text-[1.4rem] pr-2 text-gray-400'> <FaRegUserCircle /></span> <span className='font-semibold text-white'>{review?.author_details?.username}</span></p> <span className='text-gray-400 font-semibold'>Rating : <span className='text-white font-bold'> {review?.author_details?.rating}</span> </span></div>
          <ReadMore content={review?.content}/>
          </div>
      )):<div className='flex justify-center items-center text-[2rem] text-white font-semibold  mt-10'> Reviews not found </div>
        
      }
    </div>
  )
}

export default Review
