import React, { useState, useRef } from "react";
import netflixbg from "../assets/netflixbg.jpg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";
const Forms = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
           // Profile updated!
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png",
          })
            .then(() => {
              const { uid,email,displayName,photoURL} =auth.currentUser
              dispatch(addUser({
                uid,email,displayName,photoURL
              }))
          
          setErrMessage(null);
             
              
            })
            .catch((error) => {
              // An error occurred
              const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
            });

          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        
          setErrMessage(null);
          // ...
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrMessage(errorMessage);
        });
    }
  };
  return (
    <>
    
     <div className="relative flex  justify-center ">
      <div className="w-full h-full absolute bg-black opacity-40 "></div>
      <div className=" w-full bg-cover ">
        <img className=" h-[100vh] md:h-full  " src={netflixbg} alt="bg-logo" />
      </div>
      <div className="absolute top-[6rem] ">
        <form
          onSubmit={formHandler}
          action=""
          className=" rounded-md w-[25rem] p-10 flex flex-col justify-center text-white  bg-black bg-opacity-80 "
        >
          <h2 className="font-semibold text-[2rem] p-2 py-4 m-2 text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm ? (
            <input
              ref={name}
              type="name"
              className=" p-2 m-2 bg-gray-700 outline-none rounded-md"
              placeholder="Full Name"
            />
          ) : (
            ""
          )}
          <input
            ref={email}
            type="email"
            className=" p-2 m-2 bg-gray-700 outline-none rounded-md"
            placeholder="Enter Email or Phone number"
          />
          <input
            ref={password}
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            className=" p-2 m-2 bg-slate-700 outline-none rounded-md"
            placeholder="Enter Password"
          />
          {errMessage ? (
            <p className=" p-2 m-2   text-red-600 font-semibold ">
              {errMessage}
            </p>
          ) : (
            ""
          )}

          <button
            type="submit"
            className=" p-2 m-2  outline-none rounded-md bg-red-600 text-white font-semibold "
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-gray-600 p-2 m-2 cursor-pointer">
            {isSignInForm ? "New to Netflix?" : "Already a Member?"}{" "}
            <span className="text-white" onClick={toggleSignInForm}>
              {" "}
              {isSignInForm ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
    </>
   
  );
};

export default Forms;
