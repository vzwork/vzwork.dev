import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import PageNameAnimation from "../../components/PageNameAnimation";
import ScrollDownAnimation from "../../components/ScrollDownAnimation/ScrollDownAnimation";
import Post from "../../components/Post/Post";

const timeline = [
  {
    date: "10/01/2023",
    objectives: [
      "Polling application",
      "Athorization process to avoid resource abuse",
      "Quick authorization for guests users",
    ],
    results: [
      "AWS Amplify application",
      "GraphQL, Lambdas backend with custom authorization rules",
      "One click authorization for guest users",
      "Universally Unique Identifier generation",
    ],
    text: "Worked as a back-end (data) engineer on school project with three other students",
    img: "./EasilyPollStudents.png",
    href: "http://easily-poll-students.s3-website-us-west-2.amazonaws.com",
  },
];

export default function Cs() {
  const [readyToRender, setReadyToRender] = useState(false);
  const [chronological, setChronological] = useState(false);

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
        <PageNameAnimation words={["Computer", "Science"]} />
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
          Computer science is the ground zero! <br />
          It is useful to understand binary world.
          <br />
          It is especially useful to get good at working with abstractions.
        </Box>
      </Box>
      <Box height="2vh" />
      <Container sx={{ display: "flex", justifyContent: "end" }}>
        <FormControl sx={{ width: 150 }} size="small">
          <InputLabel id="order">Order</InputLabel>
          <Select
            labelId="order"
            id="selector-order"
            value={chronological}
            label="Order"
            onChange={(e) => {
              setChronological(e.target.value);
            }}
          >
            <MenuItem value={false}>New First</MenuItem>
            <MenuItem value={true}>Chronological</MenuItem>
          </Select>
        </FormControl>
      </Container>
      <Box mt={2} sx={{ textAlign: "center", fontSize: "0.8rem" }}>
        press the image to inspect the project
      </Box>
      <Container>
        {chronological
          ? timeline
              .slice(0)
              .reverse()
              .map((val, idx) => <Post props={val} key={idx} />)
          : timeline.map((val, idx) => <Post props={val} key={idx} />)}
      </Container>
      <Box height="20vh" />
    </Box>
  );
}
