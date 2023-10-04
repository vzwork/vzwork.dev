import { createContext, useState, useEffect } from "react";

const PageLocationContext = createContext({});

const PageLocationContextProvider = (props) => {
  // each input has two variations
  // - go up
  // - - if bottom go mid
  // - - if mid go top
  // - go down
  // - - if top go mid
  // - - if mid go bot

  // mid location
  // - percentage of current scroll pixel to the global height

  // const options = ["top", "mid", "bot"];
  const [indexOption, setIndexOption] = useState(0);
  const [midRelativeLocation, setMidRelativeLocation] = useState(0);
  const [scrollLocation, setScrollLocation] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const newScrollLocation = scrollLocation / innerHeight;
    if (newScrollLocation > midRelativeLocation) {
      setIndexOption(1);
      setMidRelativeLocation(newScrollLocation);
    }
  }, [scrollLocation, innerHeight]);

  const handleScroll = () => {
    setScrollLocation(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scrollend", handleScroll);
    return () => {
      window.removeEventListener("scrollend", handleScroll);
    };
  }, []);

  const handleResize = () => {
    setInnerHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (innerHeight === 0) {
      setInnerHeight(window.innerHeight);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clickUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIndexOption(0);
  };
  const clickDown = () => {
    console.log(midRelativeLocation * innerHeight);
    if (indexOption === 0) {
      setIndexOption(1);
      window.scrollTo({
        top: midRelativeLocation * innerHeight,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <PageLocationContext.Provider value={{ clickUp, clickDown }}>
      {props.children}
    </PageLocationContext.Provider>
  );
};

export { PageLocationContext, PageLocationContextProvider };
