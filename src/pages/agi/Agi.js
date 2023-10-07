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
    date: "08/21/2023",
    objectives: [
      "Take input from user",
      "Classify function family",
      "Use linear regression to fit function",
    ],
    results: [
      "All objectives were met",
      "The quality can be improved",
      "I didn't use diverse data generation process with polynomials",
    ],
    text: "Full-stack ML application",
    img: "./agi/PredictMath.png",
    href: "https://www.predict-math.web.app",
  },
  {
    date: "08/21/2023",
    objectives: [
      "Humans are great at quick pattern recognition",
      "But we also try to model change over time",
      "I will explore polynomial functions generation",
      "Explore trigonometric functions generation",
    ],
    results: [
      "Buitl a CV pipeline",
      "Able to classify function family",
      "Linear, Squared, Cubic, Trig",
    ],
    text: "Compartmentalization of Pattern Recognition Process",
    img: "./agi/NN_relation.png",
    href: "https://github.com/vzwork/nn_relation/blob/main/predict_math.ipynb",
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
