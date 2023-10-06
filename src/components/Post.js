import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function Post({ props }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const scrollEffect = () => {
      if (ref.current) {
        const element = ref.current.getBoundingClientRect();
        setIsVisible(
          element.top >= window.innerHeight * 0.1 &&
            element.bottom <= window.innerHeight * 0.9
        );
      }
    };
    window.addEventListener("scroll", scrollEffect);
    return () => {
      window.removeEventListener("scroll", scrollEffect);
    };
  });

  return (
    <Box
      ref={ref}
      my={10}
      p={3}
      borderRadius="0 1rem 0 0"
      borderTop="1px solid"
      borderRight="1px solid"
      borderColor="secondary.main"
      sx={{
        opacity: `${isVisible ? "1" : "0"}`,
        transform: `${
          isVisible
            ? "translateX(0) scale(1)"
            : "translateX(-100px) scale(0.90)"
        }`,
        transition: "ease-in-out 400ms",
      }}
    >
      <Box fontSize="0.7rem" textAlign="end">
        {props.date}
      </Box>
      <Box sx={{ width: "100%" }}>{props.text}</Box>
    </Box>
  );
}
