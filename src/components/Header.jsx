import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gpt = useSelector((store) => store.gpt.showGptSearch)
  
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // console.log(uid,email,displayName,photoURL)
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
  }, []);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="z-10 w-full bg-gradient-to-b from-black absolute flex flex-col md:flex-row justify-between  items-center">
      <div className=" p-1 mx-2">
        <img className="h-[5.5rem]" src={logo} alt="logo" />
      </div>
      
      {user ? (
        <div className=" p-1 mx-2 flex">
              
              { gpt ? '': <select className="rounded-sm mx-2  outline-none px-2 bg-gray-600 text-white" name="" id="">
                  <option value="">Telugu</option>
                  <option value="">Hindi</option>
                  <option value="">English</option>
                </select>
              }
                
     
          
             <button onClick={() => dispatch(toggleGptSearch())} className="bg-purple-800 rounded-sm font-semibold text-white px-4 py-2">
              
                { gpt ? "GPT Search ":"Homepage"}
              
              </button>

            
         
          <p>{user.displayName}</p>
          <img className="h-10" src={user.photoURL} alt="photo" />
          <button
            onClick={signOutHandler}
            className="bg-red-600 p-2 rounded-sm text-white font-semibold "
          >
            Sign Out
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
