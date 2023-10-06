import { Box, Button, Container } from "@mui/material";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext/PageContext";
import BackgroundAnimation from "../../components/BackgroundAnimation/BackgroundAnimation";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import BiotechIcon from "@mui/icons-material/Biotech";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Landing() {
  const nav = useNavigate();
  const pageContext = useContext(PageContext);
  const themeContext = useContext(ThemeContext);

  return (
    <Box>
      <BackgroundAnimation />
      <Box
        bgcolor="bg.clear"
        sx={{
          marginTop: "30vh",
          width: "100vw",
        }}
      >
        <Container>
          <Box sx={{ display: "flex" }}>
            <img
              src="Vlad.jpg"
              width="120px"
              height="120px"
              style={{
                borderRadius: "50%",
                border: "solid 3px #ccc",
                margin: "-60px 1rem",
              }}
            />
            <Box sx={{ fontSize: "1.2rem", padding: "2rem 0" }}>
              Vladislav Zakharov
            </Box>
          </Box>
        </Container>

        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}
        >
          My progress in the following areas:
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            startIcon={<SmartToyIcon />}
            variant="outlined"
            color="secondary"
            onClick={async () => {
              await pageContext.animateIn();
              nav("/agi");
              await pageContext.animateOut();
            }}
          >
            AGI
          </Button>
          <Box p={0.5}></Box>
          <Button
            startIcon={<SsidChartIcon />}
            variant="outlined"
            color="secondary"
            onClick={async () => {
              await pageContext.animateIn();
              nav("/ds");
              await pageContext.animateOut();
            }}
          >
            DS
          </Button>
          <Box p={0.5}></Box>
          <Button
            startIcon={<CorporateFareIcon />}
            variant="outlined"
            color="secondary"
            onClick={async () => {
              await pageContext.animateIn();
              nav("/de");
              await pageContext.animateOut();
            }}
          >
            DE
          </Button>
          <Box p={0.5}></Box>
          <Button
            startIcon={<BiotechIcon />}
            variant="outlined"
            color="secondary"
            onClick={async () => {
              await pageContext.animateIn();
              nav("/cs");
              await pageContext.animateOut();
            }}
          >
            CS
          </Button>
        </Box>
        <Box sx={{ height: "2rem" }} />
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}
        >
          My github history:
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: "0 1rem",
          }}
        >
          <Box
            sx={{
              overflowX: "auto",
              direction: "rtl",
            }}
          >
            <a href="https://www.github.com/vzwork">
              {themeContext.darkMode ? (
                <img
                  src="https://ghchart.rshah.org/f7561b/vzwork"
                  alt="vzwork Github chart"
                />
              ) : (
                <img
                  src="https://ghchart.rshah.org/17bd08/vzwork"
                  alt="vzwork Github chart"
                />
              )}
            </a>
          </Box>
        </Box>
        <Box sx={{ height: "2rem" }} />
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "1rem" }}
        >
          Contact me:
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            href="https://www.linkedin.com/in/vzwork"
            startIcon={<LinkedInIcon />}
            variant="outlined"
            color="secondary"
            sx={{ width: "300px" }}
          >
            LinkedIn
          </Button>
          <Box sx={{ height: "0.5rem" }} />
          <Button
            href="mailto:vladislav.zakharov.work@gmail.com?subject=Portfolio Impression"
            startIcon={<EmailIcon />}
            variant="outlined"
            color="secondary"
            sx={{ width: "300px" }}
          >
            email
          </Button>
        </Box>
        <Box sx={{ height: "5rem" }} />
      </Box>
      <Box sx={{ height: "5rem" }} />
    </Box>
  );
}
