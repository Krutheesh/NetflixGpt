import React, { useState } from "react";
import netflixbg from "../assets/netflixbg.jpg";
const Forms = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div className="relative flex  justify-center ">
      <div className="w-full h-full absolute bg-black opacity-40 "></div>
      <div className=" w-full bg-cover ">
        <img className=" h-[100vh] md:h-full  " src={netflixbg} alt="bg-logo" />
      </div>
      <div className="absolute top-[6rem] ">
        <form
          action=""
          className=" rounded-md w-[25rem] p-10 flex flex-col justify-center bg-black bg-opacity-80 "
        >
          <h2 className="font-semibold text-[2rem] p-2 py-4 m-2 text-white">
            { isSignInForm?"Sign In":"Sign Up"}
          </h2>
         {!isSignInForm? <input
            type="name"
            className=" p-2 m-2 bg-gray-700 outline-none rounded-md"
            placeholder="Full Name"
          />:''}
          <input
            type="email"
            className=" p-2 m-2 bg-gray-700 outline-none rounded-md"
            placeholder="Enter Email or Phone number"
          />
          <input
            type="password"
            className=" p-2 m-2 bg-slate-700 outline-none rounded-md"
            placeholder="Enter Password"
          />
          
          <button className=" p-2 m-2  outline-none rounded-md bg-red-600 text-white font-semibold ">
          { isSignInForm?"Sign In":"Sign Up"}
          </button>
          <p className="text-gray-600 p-2 m-2 cursor-pointer">{ isSignInForm?"New to Netflix?":"Already a Member?"}  <span className="text-white" onClick={toggleSignInForm}> { isSignInForm?"Sign Up":"Sign In"}</span></p>
        </form>
      </div>
    </div>
  );
};

export default Forms;
