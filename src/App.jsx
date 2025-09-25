import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./Router";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Office from "./pages/Office";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "portfolio",
          element: <Portfolio />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "office",
          element: <Office />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
