import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Error from "./pages/error/Error";
import Projects from "./pages/projects/Projects";
import Sidenav from "./components/Sidenav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default function MyRouter() {
  return <RouterProvider router={router} />;
}
