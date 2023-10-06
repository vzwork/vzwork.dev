import "./Post.css";
import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function Post({ props }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const scrollEffect = () => {
      if (ref.current) {
        const element = ref.current.getBoundingClientRect();
        let topMin =
          window.innerWidth > 500
            ? window.innerHeight * 0.05
            : window.innerHeight * -0.4;
        let botMax =
          window.innerWidth > 500
            ? window.innerHeight * 0.95
            : window.innerHeight * 1.4;
        setIsVisible(element.top >= topMin && element.bottom <= botMax);
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
      my={4}
      p={2}
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
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {props.img ? (
          <Box
            mb={2}
            mr={2}
            border="1px solid"
            borderColor="secondary.main"
            borderRadius="2rem"
            overflow="hidden"
            className="image-container"
          >
            <a href={props.href}>
              <img
                src={props.img}
                alt={props.img}
                width="260"
                height="160"
                style={{ objectFit: "cover" }}
              />
            </a>
          </Box>
        ) : null}
        <Box my={1}>
          <Box>Objectives:</Box>
          <Box ml={3}>
            <ul>
              {props.objectives.map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </Box>
          <Box mt={2}>Results:</Box>
          <Box ml={3}>
            <ul>
              {props.results.map((val, idx) => (
                <li key={idx}>{val}</li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
      <Box m={2}>{props.text}</Box>
    </Box>
  );
}
