import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;