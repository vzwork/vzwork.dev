import {
  Box,
  Button,
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
      "one good point",
      "another good point",
      "last excellent point",
    ],
    results: ["one good point", "another good point", "last excellent point"],
    text: "And on a final note",
    img: "./EasilyPollStudents.png",
    href: "http://easily-poll-students.s3-website-us-west-2.amazonaws.com",
  },
  {
    date: "10/01/2023",
    objectives: [
      "one good point",
      "another good point",
      "last excellent point",
    ],
    results: ["one good point", "another good point", "last excellent point"],
    text: "And on a final note",
    img: "./EasilyPollStudents.png",
    href: "http://easily-poll-students.s3-website-us-west-2.amazonaws.com",
  },
  {
    date: "10/01/2023",
    objectives: [
      "one good point",
      "another good point",
      "last excellent point",
    ],
    results: ["one good point", "another good point", "last excellent point"],
    text: "And on a final note",
    img: "./EasilyPollStudents.png",
    href: "http://easily-poll-students.s3-website-us-west-2.amazonaws.com",
  },
];

export default function Agi() {
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
