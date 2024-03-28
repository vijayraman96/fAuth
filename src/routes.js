import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "./main";
import Privacy from "./privacy";
import CallbackE from "./callbackE";
import DeleteE from "./deleteE";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />    },
    {
      path: "/privacy",
      element: <Privacy /> ,
    },
    {
      path: "/delete",
      element: <DeleteE />,
    },
    {
      path: "/callback",
      element: <CallbackE />,
    },
  ]);