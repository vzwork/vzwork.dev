import "./PageContext.css";
import { Box } from "@mui/material";
import { createContext, useEffect, useState } from "react";

const PageContext = createContext({});

const sleepTime = 400;

const PageContextProvider = (props) => {
  const [animateInProgress, setAnimateInProgress] = useState(false);
  const [animateOutProgress, setAnimateOutProgress] = useState(false);

  const preventBackNavigation = () => {
    // window.history.pushState(null, null, window.location.href);
    window.onpopstate = async () => {
      // await animateIn();
      // window.history.pushState(null, null, window.location.href);
      await animateOut();
    };
  };

  useEffect(() => {
    preventBackNavigation();
  });

  const animateIn = async () => {
    setAnimateInProgress(true);
    await sleep(sleepTime);
    setAnimateInProgress(false);
    return 0;
  };
  const animateOut = async () => {
    setAnimateOutProgress(true);
    await sleep(sleepTime);
    setAnimateOutProgress(false);
    return 0;
  };

  return (
    <PageContext.Provider value={{ animateIn, animateOut }}>
      <Box
        bgcolor="bg.main"
        className={`
          cover 
          ${animateInProgress ? "fade-in-element" : null}
          ${animateOutProgress ? "fade-out-element" : null}
        `}
      />
      {props.children}
    </PageContext.Provider>
  );
};

export { PageContext, PageContextProvider };

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
