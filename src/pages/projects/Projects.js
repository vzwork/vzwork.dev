import { Box, Card, Container } from "@mui/material";
import Sidenav from "../../components/Sidenav";
import { Image } from "@mui/icons-material";

const ProjectsData = [
  {
    title: "Easily Poll Students - Back-end Engineer",
    img: "/EasilyPollStudents.png",
    date: "2023 Mar",
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
      <Container maxWidth="md">
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
        <img
          src={props.img}
          width="400px"
          height="200px"
          style={{ objectFit: "cover", hover: {} }}
        />
      </div>
      <ul style={{ padding: "1rem" }}>
        {props.points.map((val, key) => (
          <li key={key}>{val}</li>
        ))}
      </ul>
    </Box>
  );
}
