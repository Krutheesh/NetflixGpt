import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name:"gpt",
  initialState:{
    isLoading:null,
    showGptSearch:true,
    movieResults:null,
    movieNames:false
  },
  reducers:{
    toggleGptSearch:(state,action) => {
      state.showGptSearch = !state.showGptSearch
    },
    setIsLoading:(state,action) => {
      state.isLoading = action.payload
    },
    addGptMovieResults: (state,action) => {
      const {movieNames, movieResults} = action.payload
      state.movieNames = movieNames;
      state.movieResults = movieResults
    }
  }
})

export const {setIsLoading,toggleGptSearch,addGptMovieResults} = gptSlice.actions
export default gptSlice.reducer