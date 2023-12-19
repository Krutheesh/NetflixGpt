import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";

import Browse from "./components/Browse";
import MovieIdInfo from "./components/MovieIdInfo";
import { useSelector } from "react-redux";
import Error from "./components/Error";
const Layout = () => {
 const user = useSelector(store => store.user)
 console.log(user)
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/:id",
      element: user?<MovieIdInfo />:<Body/>,
    },
    {
      path:'/similar/:id',
      element:<MovieIdInfo/>
    },{
      path:'/error',
      element:<Error/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Layout;
