import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
    movieTrailer:null,
    TrendingMovies:null,
    PopularMovies:null,
    movieIdInfo:null,
    similarMovies:null,
    movieReview:[],
   error:false
  },
  reducers:{
    addNowPlayingMovies: (state,action) => {
   state.nowPlayingMovies=action.payload
    },
    addMovieTrailer: (state,action) => {
      state.movieTrailer=action.payload
    },
    addTrendingMovies:(state,action) => {
      state.TrendingMovies=action.payload
       },
   addPopularMovies:(state,action) => {
    state.PopularMovies = action.payload
   },
   addMovieIdInfo: (state,action) => {
    state.movieIdInfo = action.payload
   },
   addSimilarMovies:(state,action) => {
    state.similarMovies = action.payload
   },
   addMovieReview: (state,action) => {
    state.movieReview = action.payload
   },
   errorFunction : (state,action) => {
    state.error = action.payload
   }
   
  }
})

export const {errorFunction,addMovieReview,addNowPlayingMovies,addMovieTrailer,addTrendingMovies,addPopularMovies,addMovieIdInfo,addSimilarMovies} = movieSlice.actions
export default movieSlice.reducer