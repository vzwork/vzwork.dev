import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Error from "./pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/*",
    element: <Error />,
  },
]);

export default function MyRouter() {
  return <RouterProvider router={router} />;
}
