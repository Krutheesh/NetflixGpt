import React from "react";
import openai from "../utils/openai";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieResults, setIsLoading } from "../utils/gptSlice";
import Shimmer from "./Shimmer";
const GptSearchBar = () => {
  const dispatch = useDispatch()
  const prompt = useRef(null);
  const searchMovieTMDB = async(movie) => {
   const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
   )
   const json = await data.json()
  //  console.log(json)
   return json.results
  }
  const handleGptSearch = async () => {
    dispatch(setIsLoading(true))
    try {
      console.log(prompt.current.value);
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        prompt.current.value +
        ", only give me names of 5 movies, comma seperated like the example result given ahead. Example Result : sahoo, Sholay, Don, mad, pokiri";
      const results = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content:gptQuery }],
      });
      // console.log(results)
      if(!results.choices){
        console.log('no results')
      }
      console.log(results.choices?.[0]?.message?.content);
      const gptMovies = results.choices?.[0]?.message?.content.split(',')
      // console.log(gptMovies)
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))
      // console.log(promiseArray)
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(addGptMovieResults({movieNames:gptMovies,movieResults:tmdbResults}))
    } catch (err) {
      console.log(err);
    }
    dispatch(setIsLoading(false))
  };

  return (
    <div className="md:w-[50vw] z-40 mt-[5rem] md:mt-0">
      <form action="" className="flex" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={prompt}
          name="prompt"
          type="text"
          className=" rounded-l-md outline-none pl-[2rem] text-white px-5 py-3 w-full bg-gray-600"
          placeholder="Enter Your Prompt"
        />
        <button
          onClick={handleGptSearch}
          type="submit "
          className="px-5 py-3  bg-red-600 text-white rounded-r-md"
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
