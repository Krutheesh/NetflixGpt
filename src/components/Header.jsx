import React from 'react'
import logo from '../assets/logo.png'
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
 const user= useSelector(store => store.user)

 const navigate = useNavigate()
  const signOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }
  return (
    <div className='z-10 w-full  absolute flex justify-between items-center'>
      <div className=' p-1 mx-2'>
        <img className='h-[5.5rem]' src={logo} alt="logo" />
      </div>
     { user?<div className=' p-1 mx-2 flex'>
        <p>{user.displayName}</p>
        <img  className='h-10' src={user.photoURL} alt="photo" />
        <button onClick={signOutHandler} className='bg-red-600 p-2 rounded-md text-white font-semibold '>Sign Out</button>
      </div>:''}
    </div>
  )
}

export default Header
