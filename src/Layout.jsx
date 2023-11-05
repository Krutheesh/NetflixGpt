import React, { useEffect } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Body from './components/Body'
import Forms from './components/Forms'
import Header from './components/Header'
import Browse from './components/Browse'
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from './utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser,removeUser } from './utils/userSlice'
const Layout = () => {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<Forms/>

        },
        {
          path:'/browse',
          element:<Browse/>
        }
      ]
    }
  ])

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName,photoURL} = user;
      console.log(uid,email,displayName,photoURL)
      dispatch(addUser({
        uid,email,displayName,photoURL
      }))
      // ...
    } else {
      // User is signed out
      dispatch(removeUser())
      
      // ...
    }
  });
},[])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Layout
