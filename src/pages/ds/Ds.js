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
    date: "01/14/2023",
    objectives: ["Predicting Star Temperature"],
    results: [
      "Learned Torch Library",
      "Neural Networks Architecture",
      "Early Stopping",
      "Quality Metrics",
    ],
    text: "Deep Learning Project",
    img: "./ds/NeuralNetworks.png",
    href: "https://github.com/vzwork/neural_networks/blob/main/project_us.ipynb",
  },
  {
    date: "11/14/2022",
    objectives: [
      "Working with care reselling company",
      "Predicting car prices",
    ],
    results: ["Gradient Boosting", "Hyper Parameter Tunning", "ROC-AUC metric"],
    text: "Numerical Methods Project",
    img: "./ds/NumericalMethods.png",
    href: "https://github.com/vzwork/num_methods/blob/main/project.ipynb",
  },
  {
    date: "07/14/2022",
    objectives: [
      "Work with phone service provider",
      "Develop a new plan suggestion mechanism",
    ],
    results: [
      "Logistic Regression",
      "Decision Tree Classifier",
      "Hyper Parameter Tunning",
      "Accuracy Recall F1 Score",
    ],
    text: "Quick + Clean ML project",
    img: "./ds/MachineLearning.png",
    href: "https://github.com/vzwork/intro_to_ml/blob/main/project_en.ipynb",
  },
  {
    date: "06/03/2022",
    objectives: [
      "Inspect phone plans data",
      "Analyse clients behavior",
      "Determine a more profitable plan for the firm",
    ],
    results: [
      "ETL with pandas",
      "Data Preprocessing",
      "P-Value hypothesis testing",
    ],
    text: "Quick + Clean DA project",
    img: "./ds/StatisticalAnalysis.png",
    href: "https://github.com/vzwork/statistical_analysis/blob/main/project_en.ipynb",
  },
];

export default function Ds() {
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
      <Box height="2vh" />
      <Box mt={2} sx={{ textAlign: "center", fontSize: "0.8rem" }}>
        press the image to inspect the project
      </Box>
      <Container maxWidth="md">
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
