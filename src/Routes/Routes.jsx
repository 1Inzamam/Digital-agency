import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AboutUs from "../pages/AboutUs";
import Service from "../pages/Service";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

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
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/contacts",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/about-us",
    element: <AboutUs></AboutUs>,
  },
]);
