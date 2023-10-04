import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PageLocationContextProvider } from "./contexts/PageLocationContext";
import MyRouter from "./Router";

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
        <PageLocationContextProvider>
          <MyRouter />
        </PageLocationContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
