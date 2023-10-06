import { Box, Button, Container } from "@mui/material";
import LoadLetters from "../../components/LoadLetters";
import { useEffect, useState } from "react";
import OnViewLoading from "../../components/OnViewLoading/OnViewLoading";
import PageNameAnimation from "../../components/PageNameAnimation";
import ScrollDownAnimation from "../../components/ScrollDownAnimation/ScrollDownAnimation";
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

export default function Ds() {
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
        <PageNameAnimation words={["Data", "Science", "&", "Math"]} />
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
          Theoretical approach and evolution of AI field! <br />
          Data insights & principles.
          <br />
          ML applications, AI and early signs of AGI...
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
