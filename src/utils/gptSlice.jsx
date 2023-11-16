import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:"gpt",
  initialState:{
    showGptSearch:true,
    movieResults:null,
    movieNames:null
  },
  reducers:{
    toggleGptSearch:(state,action) => {
      state.showGptSearch = !state.showGptSearch
    },
    addGptMovieResults: (state,action) => {
      const {movieNames, movieResults} = action.payload
      state.movieNames = movieNames;
      state.movieResults = movieResults
    }
  }
})

export const {toggleGptSearch,addGptMovieResults} = gptSlice.actions
export default gptSlice.reducer