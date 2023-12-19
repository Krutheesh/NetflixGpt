import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { useParams } from 'react-router-dom'
import MovieInfo from './MovieInfo'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch,useSelector } from 'react-redux'
import { addMovieIdInfo } from '../utils/movieSlice'
import { addSimilarMovies } from '../utils/movieSlice'
import Review from './Review'
import MovieList from './MovieList'
import Shimmer from './Shimmer'

const MovieIdInfo = () => {
  const dispatch = useDispatch()
  const {movieIdInfo,similarMovies} = useSelector(store => store.movie)
  const {id} = useParams()
console.log('iam movieidinfo')
  const fetchMovieInfo = async() => {
    try{
     const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', API_OPTIONS)
     const similarMoviesData = await fetch('https://api.themoviedb.org/3/movie/'+id+'/similar?language=en-US&page=1', API_OPTIONS)
     const similarMovies = await similarMoviesData.json()
     const json = await data.json()
     console.log(json)
     dispatch(addMovieIdInfo(json))
     dispatch(addSimilarMovies(similarMovies))
    }
    catch(err){
    console.log(err.code,err.message)
    }
  }
  useEffect(() => {
    fetchMovieInfo()
  },[id])

  console.log(id)
  if(!(id&& movieIdInfo )) return null;
 
  return (
    (similarMovies&&movieIdInfo)?<div>
     
      
      <MovieInfo title={movieIdInfo?.original_title} overView={movieIdInfo?.overview}/>
      <VideoCard movieId={id}/>
      <div className='bg-black px-10'>
      <MovieList title={"Similar Movies"} moviesList={similarMovies.results}/>
      
      <Review movieId={id}/>
      </div>

    </div>:<Shimmer/>
  )
}

export default MovieIdInfo
