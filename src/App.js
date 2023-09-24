import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Error from "./pages/error/Error";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Sidenav from "./components/Sidenav";
import Projects from "./pages/projects/Projects";

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

const theme = createTheme({
  palette: {
    background: {
      main: "rgba(50, 50, 55, 1)",
      secondary: "rgba(50, 50, 55, 0.4)",
    },
    sidenav: {
      bg: "rgba(200, 70, 60, 1)",
      main: "#fff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="slider-thumb" />
      </div>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
}

export default App;
