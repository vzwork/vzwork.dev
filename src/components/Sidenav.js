import { Box, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MailIcon from "@mui/icons-material/Mail";
import { useContext } from "react";
import { PageLocationContext } from "../contexts/PageLocationContext";
import { useNavigate } from "react-router-dom";

export default function Sidenav() {
  const nav = useNavigate();
  const pageLocationContext = useContext(PageLocationContext);

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        right: "calc(50vw - min(50vw, calc(480px + 5vw)))",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        bgcolor="sidenav.bg"
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "1rem",
        }}
      >
        <IconButton
          area-label="up"
          color="sidenav"
          onClick={() => {
            pageLocationContext.clickUp();
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
        <IconButton
          area-label="home"
          color="sidenav"
          onClick={() => {
            nav("/");
          }}
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          area-label="data-science"
          color="sidenav"
          onClick={() => {
            nav("/projects");
          }}
        >
          <SmartToyIcon />
        </IconButton>
        <IconButton
          area-label="contact"
          color="sidenav"
          href="https://www.linkedin.com/in/vzwork"
        >
          <MailIcon />
        </IconButton>
        <IconButton
          area-label="down"
          color="sidenav"
          onClick={() => {
            pageLocationContext.clickDown();
          }}
        >
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
