import { useEffect, useState } from "react";
import "./ScrollDownAnimation.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export default function ScrollDownAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const scrollUpdate = () => {
      setVisible(window.scrollY < window.innerHeight * 0.3);
    };
    window.addEventListener("scroll", scrollUpdate);
    return () => {
      window.removeEventListener("scroll", scrollUpdate);
    };
  });

  return (
    <div className={`scrollDownAnimation ${visible ? null : "notVisible"}`}>
      <KeyboardArrowDownOutlinedIcon
        sx={{ fontSize: "3rem" }}
        className="scrollDownAnimationOne"
      />
      <KeyboardArrowDownOutlinedIcon
        sx={{ fontSize: "3rem" }}
        className="scrollDownAnimationTwo"
      />
    </div>
  );
}
