import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import AboutUs from "../pages/AboutUs";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Service from "../pages/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      
    ],
  },
]);
