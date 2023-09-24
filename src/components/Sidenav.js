import { useNavigate, useNavigation } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MailIcon from "@mui/icons-material/Mail";

export default function Sidenav() {
  const nav = useNavigate();

  return (
    <Box
      sx={{
        position: "fixed",
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
        <IconButton area-label="up" color="sidenav">
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
          onClick={() => {
            nav("/contact");
          }}
        >
          <MailIcon />
        </IconButton>
        <IconButton area-label="down" color="sidenav">
          <KeyboardArrowDownIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
