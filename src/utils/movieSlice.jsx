import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name:"movies",
  initialState:{
    nowPlayingMovies:null,
    movieTrailer:null,
    TrendingMovies:null,
    PopularMovies:null
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
   }
  }
})

export const {addNowPlayingMovies,addMovieTrailer,addTrendingMovies,addPopularMovies} = movieSlice.actions
export default movieSlice.reducer