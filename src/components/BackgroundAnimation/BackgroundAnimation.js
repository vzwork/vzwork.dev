import { useContext, useEffect } from "react";
import "./BackgroundAnimation.css";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";

export default function BackgroundAnimation() {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="backgroundAnimation">
      <div
        className={`light x1 ${themeContext.darkMode ? "orange" : "green"}`}
      ></div>
      <div
        className={`light x2 ${themeContext.darkMode ? "orange" : "green"}`}
      ></div>
      <div
        className={`light x3 ${themeContext.darkMode ? "orange" : "green"}`}
      ></div>
      <div
        className={`light x4 ${themeContext.darkMode ? "orange" : "green"}`}
      ></div>
      <div
        className={`light x5 ${themeContext.darkMode ? "orange" : "green"}`}
      ></div>
      <div
        className={`light x6 ${themeContext.darkMode ? "orange" : "green"}`}
      ></div>
      <div
        className={`light x7 ${themeContext.darkMode ? "orange" : "green"}`}
      ></div>
      <div
        className={`light x8 ${themeContext.darkMode ? "orange" : "green"}`}
      ></div>
      <div
        className={`light x9 ${themeContext.darkMode ? "orange" : "green"}`}
      ></div>
    </div>
  );
}
