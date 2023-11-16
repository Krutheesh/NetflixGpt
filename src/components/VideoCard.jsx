import React,{useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addMovieTrailer } from '../utils/movieSlice'
import { API_OPTIONS } from '../utils/constants'
const VideoCard = ({movieId,hai}) => {
 
  const dispatch = useDispatch()
  const movieTrailer = useSelector(store => store.movie?.movieTrailer)
  
  const movieInfoById = async() => {
   
    try{

      const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS)
      const json = await data.json()
      // console.log(json)
      const filterData = json.results.filter( ele => ele.type=="Trailer" )
      // console.log(filterData[0])
      dispatch(addMovieTrailer(filterData[0]))
    }
    
    catch(err){
   console.log(err.message)
    }

  }
  useEffect(()=> {
    !movieTrailer&&movieInfoById()
  },[])
  // if(!movieTrailer) return

  // console.log(movieTrailer.key)
  return (
    <div className=''>
      <iframe className="w-full aspect-video" src={"https://www.youtube.com/embed/"+ movieTrailer?.key +"?&autoplay=1&mute=1"} frameBorder="0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoCard
