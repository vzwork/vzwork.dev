import { Box, Button, Container } from "@mui/material";
import LoadLetters from "../../components/LoadLetters";
import OnViewLoading from "../../components/OnViewLoading/OnViewLoading";
import { useEffect, useRef, useState } from "react";
import PageNameAnimation from "../../components/PageNameAnimation";
import ScrollDownAnimation from "../../components/ScrollDownAnimation/ScrollDownAnimation";
import { WindowOutlined } from "@mui/icons-material";
import Post from "../../components/Post";

const timeline = [
  {
    date: "08/20/2001",
    text: "hello there very important person. thank you for reading this",
  },
  {
    date: "08/20/2001",
    text: "hello there very important person. thank you for reading this",
  },
  {
    date: "08/20/2001",
    text: "hello there very important person. thank you for reading this",
  },
  {
    date: "08/20/2001",
    text: "hello there very important person. thank you for reading this",
  },
];

export default function Agi() {
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    if (!readyToRender) {
      setTimeout(() => {
        setReadyToRender(true);
      }, 2000);
    }
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          height: "50vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PageNameAnimation words={["Artificial", "General", "Intelligence"]} />
      </Box>
      <Box
        sx={{
          opacity: `${readyToRender ? "1" : "0"}`,
          transition: "ease-in 1s",
          height: "50vh",
        }}
      >
        <ScrollDownAnimation />
        <Box
          sx={{
            textAlign: "center",
            lineHeight: "2rem",
            paddingTop: "8vh",
            padding: "0 0.5rem",
          }}
        >
          AGI is the final frontier! <br />
          The goal of AGI is to be able to do any task a human can.
          <br />
          AGI has the potential to become hostile, <br />
          but the hope for the symbiotic future remains...
        </Box>
      </Box>
      <Container>
        {timeline.map((val, idx) => (
          <Post props={val} key={idx} />
        ))}
      </Container>
      <Box sx={{ height: "100vh" }} />
    </Box>
  );
}
