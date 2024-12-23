import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}/>;
};

export default App;
