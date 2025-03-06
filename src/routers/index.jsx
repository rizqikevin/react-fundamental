import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Index"; // Import the Home component
import About from "../pages/about";
import RootLayout from "../Layouts/RootLayout";
import Blog from "../pages/blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:'/blog',
        element: <Blog/>
      }
    ],
  },
]);
