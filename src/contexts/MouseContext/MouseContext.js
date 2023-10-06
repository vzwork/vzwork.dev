import { createContext, useEffect, useState } from "react";

const MouseContext = createContext({});

const MouseContextProvider = (props) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setX(event.clientX);
      setY(event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MouseContext.Provider value={{ x, y }}>
      {props.children}
    </MouseContext.Provider>
  );
};

export { MouseContext, MouseContextProvider };
