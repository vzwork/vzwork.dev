import { MouseContextProvider } from "./contexts/MouseContext/MouseContext";
import { PageContextProvider } from "./contexts/PageContext/PageContext";
import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Error from "./pages/error/Error";
import Agi from "./pages/agi/Agi";
import Navbar from "./components/Navbar";
import Cs from "./pages/cs/Cs";
import { Box } from "@mui/material";
import { PageColorContextProvider } from "./contexts/PageColorContext/PageColorContext";
import De from "./pages/de/De";
import Ds from "./pages/ds/Ds";

const InBetween = (props) => {
  return (
    <>
      {props.landing ? null : <Navbar />}
      {/* <BrightnessMode /> */}
      {/* <Sidenav /> */}
      <Box sx={{ width: "100%", height: "100%", color: "text.main" }}>
        <></>
        {props.children}
      </Box>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <InBetween landing={true}>
        <Landing />
      </InBetween>
    ),
  },
  {
    path: "/agi",
    element: (
      <InBetween>
        <Agi />
      </InBetween>
    ),
  },
  {
    path: "/de",
    element: (
      <InBetween>
        <De />
      </InBetween>
    ),
  },
  {
    path: "/cs",
    element: (
      <InBetween>
        <Cs />
      </InBetween>
    ),
  },
  {
    path: "/ds",
    element: (
      <InBetween>
        <Ds />
      </InBetween>
    ),
  },
  {
    path: "/*",
    element: (
      <InBetween>
        <Error />
      </InBetween>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <PageColorContextProvider>
        <ThemeContextProvider>
          <PageContextProvider>
            <MouseContextProvider>
              <RouterProvider router={router} />
            </MouseContextProvider>
          </PageContextProvider>
        </ThemeContextProvider>
      </PageColorContextProvider>
    </div>
  );
}

export default App;
