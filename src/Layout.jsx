import React, { useEffect } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Body from './components/Body'

import Browse from './components/Browse'



const Layout = () => {
 
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Body/>,
    }, 
    {
          path:'/browse',
          element:<Browse/>
        }
      
    
  ])


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Layout
