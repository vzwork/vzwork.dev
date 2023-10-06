import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useState } from "react";
import BrightnessMode from "./BrightnessMode";

const themeLight = createTheme({
  palette: {
    text: {
      main: "#000",
    },
    primary: {
      main: "#000",
    },
    bg: {
      main: "rgba(255, 255, 255, 1)",
      clear: "rgba(255, 255, 255, 0.8)",
    },
    secondary: {
      main: "rgba(23, 189, 8, 1)",
    },
  },
});

const themeDark = createTheme({
  palette: {
    text: {
      main: "#fff",
    },
    primary: {
      main: "#fff",
    },
    bg: {
      main: "rgba(0, 0, 0, 1)",
      clear: "rgba(0, 0, 0, 0.8)",
    },
    secondary: {
      main: "rgba(247, 86, 27, 1)",
    },
  },
});

const ThemeContext = createContext({});

const ThemeContextProvider = (props) => {
  const now = new Date();
  const isNight = now.getHours() >= 18 || now.getHours() <= 6;
  const [darkMode, setDarkMode] = useState(isNight);

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      <ThemeProvider theme={darkMode ? themeDark : themeLight}>
        <BrightnessMode darkMode={darkMode} setDarkMode={setDarkMode} />
        {props.children}
        <></>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
