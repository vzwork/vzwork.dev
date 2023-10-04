import { Box, Button, Container, Grid, IconButton, Stack } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MailIcon from "@mui/icons-material/Mail";
import CheckIcon from "@mui/icons-material/Check";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidenav from "../../components/Sidenav";

const posts = [
  {
    title: "Personal Website",
    date: "2023/10/03",
    content: "Added scroll functionality.",
  },
  {
    title: "AI research",
    date: "2023/09/22",
    content:
      "Developed a full-stack ML application. Developed front-end with react where you generate input. Connected it to database. Built a python server that performs ML analysis. Finally the model output is diplayed on the website.",
  },
  {
    title: "AI research",
    date: "2023/09/09",
    content:
      "Finished my research on patern recognition. Generated data using linear, quadratic, cubic, sinusoidal relations. Train ResNet50 to classifiy mathemtaical relation.",
  },
  {
    title: "Personal Website",
    date: "2023/08/30",
    content:
      "Hosted the website, added backend. Added pages for: projects, contact, error.",
  },
  {
    title: "Personal Website",
    date: "2023/08/29",
    content:
      "I have sumbled up on the styling I like. Developed landing page..",
  },
];

export default function Landing() {
  const nav = useNavigate();

  return (
    <Box>
      <Sidenav />
      <Container maxWidth="md">
        <Grid
          container
          bgcolor={"background.main"}
          sx={{
            borderRadius: "1rem",
            padding: "1rem",
            mt: "5vh",
            border: "1px solid #888",
          }}
        >
          <Grid
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            item
          >
            <Box>
              <img
                src="Vlad.jpg"
                width="200px"
                style={{ borderRadius: "1rem" }}
              />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                Vladislav Zakharov
              </Box>
            </Box>
          </Grid>
          <Grid
            sm={6}
            pt={4}
            pr={2}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
            item
          >
            <Box pl={2}>
              <ul>
                <li>
                  BS in Computer Science <CheckIcon fontSize="1rem" />
                </li>
                <li>
                  DS + ML bootcamp <CheckIcon fontSize="1rem" />
                </li>
                <li>
                  Full-stack Intern{" "}
                  <a href="https://www.speedy.legal" style={{ color: "white" }}>
                    Speedy Legal
                  </a>
                </li>
                <li>
                  Front-end Intern{" "}
                  <a href="https://www.floopedu.com" style={{ color: "white" }}>
                    Floop
                  </a>
                </li>
              </ul>
              <br />
              <p>
                Applying to jobs
                <LoadingDots delay />
              </p>
              <p>
                Building AGI
                <LoadingDots />
              </p>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            mt={2}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Stack direction="row" spacing={0.5}>
              <Button
                onClick={() => {
                  nav("/projects");
                }}
                area-label="data-science"
                color="sidenav"
                variant="outlined"
                size="small"
                startIcon={<SmartToyIcon />}
              >
                projects
              </Button>
              <Button
                href="https://www.linkedin.com/in/vzwork"
                area-label="contact"
                color="sidenav"
                variant="outlined"
                size="small"
                startIcon={<MailIcon />}
              >
                contact
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Box mt={4}>
          {posts.map((props, index) => (
            <Post props={props} key={index} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function Post({ props }) {
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
      {props.content}
    </Box>
  );
}

function LoadingDots(props) {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(true);

  useEffect(() => {
    if (delay && props.delay) {
      setTimeout(() => {
        setCount((count + 1) % 4);
      }, 500);
      setDelay(!delay);
    } else {
      setTimeout(() => {
        setCount((count + 1) % 4);
      }, 1000);
    }
  });

  return (
    <>
      {count == 1 ? <>.</> : null}
      {count == 2 ? <>..</> : null}
      {count == 3 ? <>...</> : null}
    </>
  );
}
