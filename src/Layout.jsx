import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Body from './components/Body'
import Forms from './components/Forms'
import Header from './components/Header'
import Browse from './components/Browse'
const Layout = () => {
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


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Layout
