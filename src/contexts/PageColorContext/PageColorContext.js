import "./PageColorContext.css";
import { Box } from "@mui/material";
import { createContext, useEffect, useState } from "react";

const PageColorContext = createContext({});

const sleepTime = 600;

const PageColorContextProvider = (props) => {
  const [animateInColorProgress, setAnimateInColorProgress] = useState(false);
  const [animateOutColorProgress, setAnimateOutColorProgress] = useState(false);
  const [darkToLightTransition, setDarkToLightTransition] = useState(false);

  const animateInColor = async () => {
    setAnimateInColorProgress(true);
    await sleep(sleepTime);
    setAnimateInColorProgress(false);
    return 0;
  };
  const animateOutColor = async () => {
    setAnimateOutColorProgress(true);
    await sleep(sleepTime);
    setAnimateOutColorProgress(false);
    return 0;
  };

  return (
    <PageColorContext.Provider
      value={{ animateInColor, animateOutColor, setDarkToLightTransition }}
    >
      <Box
        className={`
          cover-color
          ${
            animateInColorProgress && darkToLightTransition
              ? "fade-in-black-element"
              : null
          }
          ${
            animateOutColorProgress && darkToLightTransition
              ? "fade-out-white-element"
              : null
          }
          ${
            animateInColorProgress && !darkToLightTransition
              ? "fade-in-white-element"
              : null
          }
          ${
            animateOutColorProgress && !darkToLightTransition
              ? "fade-out-black-element"
              : null
          }
        `}
      />
      {props.children}
    </PageColorContext.Provider>
  );
};

export { PageColorContext, PageColorContextProvider };

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
