import { Box, Container } from "@mui/material";
import Sidenav from "../../components/Sidenav";
import "./Projects.css";

const ProjectsData = [
  {
    title: "Predict Math - Solo Project",
    img: "/PredictMath.png",
    date: "2023 Mar",
    href: "https://www.predict-math.web.app",
    points: [
      "Successfully built a Computer Vision model that predicts mathematical family of equations.",
      "Built a front-end web app that allow people two input data.",
      "Connected database and server for the ML infrastructure.",
    ],
  },
  {
    title: "Easily Poll Students - Back-end Engineer",
    img: "/EasilyPollStudents.png",
    date: "2023 Mar",
    href: "http://easily-poll-students.s3-website-us-west-2.amazonaws.com",
    points: [
      "Implemented one click authorization solution for firctionless user experience.",
      "Secured database access by developing custom GraphQL authentication rules for DynamoDB.",
    ],
  },
];

export default function Projects() {
  return (
    <Box>
      <Sidenav />
      <Container maxWidth="md" sx={{ mt: "5vh" }}>
        {ProjectsData.map((val, key) => (
          <Project key={key} props={val} />
        ))}
      </Container>
    </Box>
  );
}

function Project({ props }) {
  return (
    <Box
      px={2}
      py={1}
      mt={1}
      bgcolor={"background.secondary"}
      sx={{
        borderRadius: "1rem",
        padding: "1rem",
        border: "1px solid #888",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <h2>{props.title}</h2>
        <p style={{ fontSize: "0.8rem" }}>{props.date}</p>
      </Box>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <a href={props.href} className="image-container">
          <img src={props.img} />
        </a>
      </div>
      <ul style={{ padding: "1rem" }}>
        {props.points.map((val, key) => (
          <li key={key}>{val}</li>
        ))}
      </ul>
    </Box>
  );
}
